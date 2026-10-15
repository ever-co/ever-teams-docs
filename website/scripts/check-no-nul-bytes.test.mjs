/**
 * Exit codes of check-no-nul-bytes.mjs. A clean site build only ever exercises its success path, so
 * these fixtures pin the failures: a NUL in a nested page, a build with no HTML, no build at all.
 *
 *   node --test scripts/
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { after, test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const script = join(
  dirname(fileURLToPath(import.meta.url)),
  "check-no-nul-bytes.mjs",
);
const root = mkdtempSync(join(tmpdir(), "check-no-nul-bytes-"));
after(() => rmSync(root, { recursive: true, force: true }));

/**
 * A fixture build directory holding the given files.
 * @param {string} name the fixture's directory name
 * @param {Record<string, string>} files relative path -> content
 * @returns {string} the fixture's path
 */
function build(name, files) {
  const dir = join(root, name);
  mkdirSync(dir, { recursive: true });
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), content, "utf8");
  }
  return dir;
}

/**
 * Runs the check on a directory.
 * @param {string} dir the build directory to check
 * @returns {import("node:child_process").SpawnSyncReturns<string>} the result
 */
function check(dir) {
  return spawnSync(process.execPath, [script, dir], { encoding: "utf8" });
}

test("passes on pages without a NUL", () => {
  const result = check(
    build("clean", {
      "index.html": "<p>Time tracking metrics — hours</p>",
      "features/dashboard/index.html": "<p>🎨️ ok</p>",
      "assets/app.js": "not html \u0000",
    }),
  );
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /no NUL character in 2 HTML page\(s\)/);
});

test("fails on a NUL in a nested page, naming the page", () => {
  const result = check(
    build("dirty", {
      "index.html": "<p>clean</p>",
      "features/dashboard/index.html": "<strong>metrics</strong> \u0000— Hours",
    }),
  );
  assert.equal(result.status, 1);
  assert.match(result.stderr, /1 NUL character\(s\) in the built HTML/);
  assert.match(result.stderr, /dashboard/);
});

test("fails when the build holds no HTML", () => {
  const result = check(build("empty", { "assets/app.js": "" }));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /No HTML page under/);
});

test("fails when there is no build directory", () => {
  const result = check(join(root, "missing"));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /No build directory at/);
});
