import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props } from "@theme/Footer/Layout";

import ThemeSelector from "@site/src/components/ThemeSelector";

/**
 * Same structure as the stock layout, minus the utility classes on the bottom
 * row: the theme stacks and centres the logo above the copyright, and we want
 * the two sitting on one line. Dropping `text--center` and `margin-bottom--sm`
 * here leaves the row's alignment to .footer__bottom in custom.css rather than
 * overriding utilities from a distance.
 *
 * The row's right end also holds the System / Light / Dark theme selector, so
 * it is on every page, mobile included. The row always renders for it, even
 * without a logo or copyright.
 */
export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): ReactNode {
  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, "footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        {links}
        <div className="footer__bottom">
          {logo}
          <div className="footer__bottom-end">
            {copyright}
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  );
}
