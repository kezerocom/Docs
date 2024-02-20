// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'KeZero Documentation',
    tagline: 'KeZero documentation and API website.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.kezero.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'kezerocom', // Usually your GitHub org/user name.
    projectName: 'docs.kezero.com', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: '/',
            navbar: {
                title: '',
                logo: {
                    alt: 'logo',
                    src: 'img/black_and_blue.png',
                },
                items: [
                    {
                        position: 'right',
                        sidebarId: "login",
                        label: 'OpenAPI',
                        href: '/docs/OpenAPI/',
                    },
                    {
                        href: '#/',
                        label: '|',
                        position: 'right',
                    },
                    {
                        href: 'https://www.kezero.com',
                        label: 'KeZero',
                        position: 'right',
                    },
                    {
                        href: '#/',
                        label: '>>>',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Company',
                        items: [
                            {
                                label: 'KeZero Website',
                                to: 'https://www.kezero.com',
                            },
                        ],
                    },
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'OpenAPI',
                                to: '/docs/OpenAPI',
                            }
                        ]
                    },
                    {
                        title: 'Projects',
                        items: [
                            {
                                label: 'Netly',
                                to: 'https://netly.docs.kezero.com',
                            },
                            {
                                label: 'xLift',
                                to: 'https://xlift.kezero.com',
                            },
                            {
                                label: 'See More',
                                href: 'https://github.com/kezero/kezerocom',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/kezerocom',
                            },
                            {
                                label: 'Netly (source-code)',
                                href: 'https://github.com/alec1o/Netly',
                            },
                            {
                                label: 'xLift (source-code)',
                                href: 'https://github.com/alec1o/xLift',
                            },
                            {
                                label: 'KeZero Docs (source-code)',
                                href: 'https://github.com/kezerocom/docs',
                            }
                        ],
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} KeZero. All rights reserved.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
