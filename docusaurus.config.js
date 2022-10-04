/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "TempleOS Simplified",
  tagline: "Providing simple TempleOS documentation.",
  url: "https://templeos.me",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "logos/HolyC.png",
  organizationName: "TempleOS-Simplified",
  projectName: "TempleDocs",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "warn",

  // ADDED BY XZNTRC, DO NOT REMOVE. FOR EASIER ACCESSS
  customFields: {
    DiscordURL: "https://discord.gg/Epu3WxjaP7",
    GitHubURL: "https://github.com/templeos-simplified/site-docs",
  },




  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "TempleDocs",
      logo: {
        alt: "HolyC Logo",
        src: "logos/HolyC.png",
      },
      
      items: [



        {
          to: "guide/intro",
          label: "Guide",
          position: "left",
          sidebarId: 'guide'
        },

        {
          to: "holyc/intro",
          label: "HolyC",
          position: "left",
          sidebarId: 'holyc'
        },

        {
          to: "Keybinding",
          label: "Keybinding",
          position: "left",
          sidebarId: 'config'
        },

        

        {
          href: "https://github.com/templeos-simplified/site-docs",
          position: "right",
          
        },

        {
          href: "https://discord.gg/Epu3WxjaP7",
          position: "right",
        },

      ],
    },

    footer: {
      style:            'dark',
      links: [
    
        //  right
        {
          title:        'Development',

          items: [

            {
              label:    'GitHub',
              href:     "https://www.github.com/templeos-simplified/site-docs",
              position: "right",
            },

            {
              label:    'Contributors',
              href:     "https://github.com/TempleOS-Simplified/Site-Docs/graphs/contributors",
              position: "right",
            }

          ],
        

        },

        // center

        {

          title:        'Contact',

          items: [

            {
              label:    'Twitter',
              href:     "https://twitter.com/templeosenjoyer",
              position: "center",
            },


            {
              label:    'Email (Prefered)',
              href:     "mailto:xzntrc@fedora.email",
              position: "center",
            },
            
          ],
        },
      
        // left

        {

          title:        'Donate',


          items: [

            {
              label:    'National Alliance on Mental Health (US)',
              href:     "https://donate.nami.org/give/197406/#!/donation/checkout?utm_source=globalNav&utm_medium=website&utm_campaign=DonationTracking&c_src=WEBDGe",
              position: "center",
            },


            {
              label:    'SANE (UK)',
              href:     "https://www.sane.org.uk",
              position: "center",
            },


            {
              label:    'SANE (AU)',
              href:     "https://www.sane.org/",
              position: "center",
            },

          ],
        
        
        },


      ],


      copyright: `Creative Commons Attribution 4.0 International © ${new Date().getFullYear()} | Xzntrc`,


    },

    prism: {
      
    },

  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve("./src/css/style.css"),
        },
      },
    ],
  ],

  
};
