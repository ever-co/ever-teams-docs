import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLocation } from "@docusaurus/router";

import styles from "./styles.module.css";

/**
 * Routes that swap the sidebar menu for the promo panel.
 *
 * Matched against the *end* of the pathname so a locale prefix
 * (`/fr/advanced-guide/support`) still resolves. On these routes the desktop
 * sidebar shows the panel *instead of* the navigation links; everywhere else it
 * shows the normal menu and no panel.
 */
const ROUTES = ["/advanced-guide/support"];

/** Shared by the DocSidebar wrapper, which hides the menu on these routes. */
export function useIsPromoRoute(): boolean {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "");
  return ROUTES.some((route) => path.endsWith(route));
}

export default function SidebarPromo(): ReactNode {
  // Hooks must run before the early return, so resolve both sources up front.
  const light = useBaseUrl("/img/screen-app-frame-light.png");
  const dark = useBaseUrl("/img/screen-app-frame.png");
  const isPromoRoute = useIsPromoRoute();

  if (!isPromoRoute) {
    return null;
  }

  return (
    <aside className={styles.promo} aria-label="Ever Teams Cloud">
      {/* Decorative hairlines. Rendered as elements rather than pseudo-content
          so they can sit behind the copy without a stacking-context fight. */}
      <span className={styles.ruleH} aria-hidden="true" />
      <span className={styles.ruleV} aria-hidden="true" />

      <div className={styles.frame}>
        {/* ThemedImage renders both sources and lets CSS pick one, so there is
            no colour-mode flash on hydration. */}
        <ThemedImage
          className={styles.shot}
          alt="The Ever Teams task profile screen, showing a running timer above a list of assigned tasks"
          sources={{ light, dark }}
        />
      </div>

      <p className={styles.eyebrow}>Ever Teams Cloud</p>

      <p className={styles.title}>
        Start tracking work &amp; time in minutes, not weeks.
      </p>

      <figure className={styles.quote}>
        <blockquote className={styles.quoteText}>
          Open source under AGPL&#8209;3.0, free to start, and hosted for you —
          there is no server to provision and nothing to maintain.
        </blockquote>
        <figcaption className={styles.quoteMeta}>
          Ever Co. LTD &middot; app.ever.team
        </figcaption>
      </figure>

      <Link className={styles.cta} to="https://app.ever.team">
        Get started
      </Link>
    </aside>
  );
}
