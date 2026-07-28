import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props } from "@theme/Footer/Layout";

/**
 * Same structure as the stock layout, minus the utility classes on the bottom
 * row: the theme stacks and centres the logo above the copyright, and we want
 * the two sitting on one line. Dropping `text--center` and `margin-bottom--sm`
 * here leaves the row's alignment to .footer__bottom in custom.css rather than
 * overriding utilities from a distance.
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
        {(logo || copyright) && (
          <div className="footer__bottom">
            {logo}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
