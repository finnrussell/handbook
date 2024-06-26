const siteSettings = {
  title: "Handbook",
  tagline: "",
  url: "https://handbook.getdbt.com",
  baseUrl: "/",
  organizationName: "dbt Labs",
  projectName: "handbook",
  scripts: ["https://buttons.github.io/buttons.js"],
  favicon: "img/dbt-logo.svg",
  customFields: {},
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "./docs",
          sidebarPath: "./sidebars.json",
          routeBasePath: "/docs",
          breadcrumbs: false,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          id: "classic",
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: "GTM-W94FQQ8F",
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        highlightResult: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Handbook",
      logo: {
        src: "img/dbt-labs-light.svg",
        href: "/docs/about_dbt_labs",
      },
      items: [],
    },
    docs: {
      sidebar: {
        hideable: false,
      },
    },
    image: "img/undraw_online.svg",
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} dbt Labs`,
      logo: {
        src: "img/dbt-logo-light.svg",
      },
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = siteSettings;
