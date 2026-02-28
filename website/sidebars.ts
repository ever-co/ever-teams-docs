import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "introduction",
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        "getting-started/getting-started",
        "getting-started/installation",
        "getting-started/configuration",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "architecture/index",
        "architecture/overview",
        "architecture/monorepo",
        "architecture/frontend",
        "architecture/state-management",
        "architecture/api-layer",
        "architecture/backend",
      ],
    },
    {
      type: "category",
      label: "Features",
      items: [
        "features/index",
        "features/time-tracking",
        "features/task-management",
        "features/teams",
        "features/projects",
        "features/daily-plans",
        "features/kanban",
        "features/calendar",
        "features/dashboard",
        "features/meet",
        "features/timesheets",
        "features/reports",
        "features/integrations",
        "features/roles-permissions",
        "features/settings",
        "features/i18n",
        "features/themes",
      ],
    },
    {
      type: "category",
      label: "Applications",
      items: [
        "apps/index",
        "apps/web",
        "apps/mobile",
        "apps/desktop",
        "apps/extensions",
      ],
    },
    {
      type: "category",
      label: "Deployment",
      items: [
        "deployment/index",
        "deployment/docker-quick-start",
        "deployment/docker-dev-vs-prod",
        "deployment/deployment-secrets",
        "deployment/cloud-platforms",
      ],
    },
    {
      type: "category",
      label: "DevOps & CI/CD",
      items: ["devops/index"],
    },
    {
      type: "category",
      label: "Packages",
      items: ["packages/index"],
    },
    {
      type: "category",
      label: "Development",
      items: ["development/index"],
    },
    {
      type: "category",
      label: "API reference",
      items: ["api-reference/index"],
    },
    {
      type: "category",
      label: "Security",
      items: ["security/index"],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: ["troubleshooting/index"],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "community/community",
        "community/contact-us",
      ],
    },
  ],
};

export default sidebars;
