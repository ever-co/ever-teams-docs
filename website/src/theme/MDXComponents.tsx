import React, { type ComponentProps, type ReactNode } from "react";
import OriginalMDXComponents from "@theme-original/MDXComponents";

/**
 * A table that outgrows the content column has to scroll inside something,
 * and it cannot be itself: `display: block` on the table would leave its rows
 * shrink-to-fit inside a full-width bordered box. So every markdown table gets
 * a scroll container of its own — otherwise the overflowing columns are simply
 * clipped by the page and unreachable. Styles live in `src/css/custom.css`
 * under `.et-table-scroll`.
 */
function MDXTable(props: ComponentProps<"table">): ReactNode {
  return (
    <div className="et-table-scroll">
      <table {...props} />
    </div>
  );
}

export default {
  ...OriginalMDXComponents,
  table: MDXTable,
};
