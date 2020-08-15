require(`dotenv`).config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        siteTitleAlt: `yoshi`,
        siteTitle: `yoshi - Yoshihisa Kaino`,
        siteUrl: `http://127.0.0.1`,
        siteDescription: `My portfolio`,
        siteLanguage: `ja`,
        siteImage: `https://yoshi.fun/banner.png`,
        author: `@yoshi1125hisa`,
        siteHeadline: ``,
        siteLicense: `All rights reserved`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/yoshi1125hisa`,
                    },
                    {
                        name: `Facebook`,
                        url: `https://www.facebook.com/yoshi1125hisa`,
                    },
                    {
                        name: `Wantedly`,
                        url: `https://www.wantedly.com/users/136325101`,
                    },
                    {
                        name: `GitHub`,
                        url: `https://github.com/yoshi1125hisa`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
                short_name: `minimal-blog`,
                description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#ADB367`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
    ],
}
