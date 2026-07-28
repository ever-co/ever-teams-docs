import React, { type ReactNode } from "react";
import Content from "@theme-original/DocSidebar/Desktop/Content";
import type ContentType from "@theme/DocSidebar/Desktop/Content";
import type { WrapperProps } from "@docusaurus/types";

import SidebarPromo, { useIsPromoRoute } from "@site/src/components/SidebarPromo";

type Props = WrapperProps<typeof ContentType>;

/**
 * Swaps the sidebar menu for a promo card on the routes SidebarPromo claims.
 *
 * On those routes the navigation links are withheld entirely so the card is the
 * only thing in the left rail. This is desktop-only — the mobile drawer wraps a
 * different component, so navigation there is untouched, and the navbar remains
 * the way out of the page on every viewport.
 */
export default function ContentWrapper(props: Props): ReactNode {
  const isPromoRoute = useIsPromoRoute();

  return (
    <>
      {!isPromoRoute && <Content {...props} />}
      <SidebarPromo />
    </>
  );
}
