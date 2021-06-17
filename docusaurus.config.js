/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Architecture at 99x",
  tagline: "Creating impactful digital products",
  url: "https://architecture.99x.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "99x", // Usually your GitHub org/user name.
  projectName: "architecture.99x.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Architecture at ",
      logo: {
        alt: "99x",
        src: "img/99x-logo.svg"
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Knowlege Base",
          position: "right"
        },
        {
          href: "https://github.com/99x/architecture.99x.io",
          label: "Contribute",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Architecture at 99x",
              to: "docs/"
            },
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/99xio"
            },
            {
              label: "Discord",
              href: "https://www.facebook.com/99xio"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/99x_io"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://engineering.99x.io"
            },
            {
              label: "GitHub",
              href: "https://github.com/99x"
            },
            { 
              label: "Contribute",
              href: "https://github.com/99x/architecture.99x.io",
            },
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 99x All Rights Reserved`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/99x/architecture.99x.io/edit/master/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/99x/architecture.99x.io/edit/master/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
