<h1 align="center">
<a href="https://templeos.me"><img src="https://templeos.me/img/logo_upscaled.jpg" alt="The Temple Operating System" width="150"></a>

<p align="center">⚔️ TempleOS Simplified 📖</p>
</h1>
<a href="https://discord.gg/Epu3WxjaP7"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Invite"></a> <a href="https://templeos.me"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" alt="Website"></a>

### Introduction

* TempleOS Simplified is a community built and operated documentation for learning the in's and out's of the Temple Operating System, along with it's unique C-variant "HolyC".
* TempleOS Simplfied is designed to be as beginner friendly as possible while maintaining a content-rich approach.
* Built using 🦕 [Docusaurus](https://docusaurus.io/); built with elegancy.

### Contributing

> **Note**

> A basic understanding of [React](https://reactjs.org/) and [Markdown](https://https://www.markdownguide.org/) may be nesseciary for editing features of TempleOS Simplified.

Upon pushing to the main branch, the site will be automatically built to the [gh-pages](https://github.com/TempleOS-Simplified/Site-Docs/tree/gh-pages) (Does not require any manual updates; all work is done on the main branch) and deployed to GitHub pages. Understanding the file structure is important to contributing to the site; it may be worth checking out the [Docsuaurs Documentation](https://docusaurus.io/docs).

#### File Structure

Editing the documentation pages requires only an understanding of Markdown. These pages can be edited within the `docs/` directory, and look something like this:

```
.
├── getting-started
│   ├── _category_.json
│   ├── Diving In.mdx
│   ├── img
│   │   ├── bootloader.png
│   │   └── terminal.png
│   └── installation.mdx
└── intro.mdx
```

Images and resources should be added to `static/` which is built directly to `/` in `gh-pages`:

```
.
├── CNAME
└── img
    ├── elephant.svg
    ├── favicon.ico
    ├── HolyC_Logo.svg
    ├── larger.jpg
    ├── logo.jpg
    ├── logo_upscaled.jpg
    └── terry.svg
```
