/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Joshua Chisolm",
    description:
      "I'm Joshua Chisolm, and this is my portfolio page, where I host all of my projects.",
    url: "https://www.joshuachisolm.com",
    image: "/favicon.ico",
    twitterUsername: "@frozenal_",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Poppins`, `Epilogue`],
        display: "swap",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
