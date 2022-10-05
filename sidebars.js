const sidebars = {
  guide: [
    "guide/intro",
    {
      type: "category",
      label: "Installation",
      link: {
        type: 'generated-index',
        title: 'Installing TempleOS',
        description: "It's time to install TempleOS on your system. In this chapter, we will go over all there is to the installation of TempleOS.",
        slug: '/category/docusaurus-guides',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        "guide/installing/methods",
        "guide/installing/virtualized"
      
      ],
    },
    "Keybinding"
    
  ],
  holyc : [
    "holyc/intro"
  ]


}

module.exports = sidebars
