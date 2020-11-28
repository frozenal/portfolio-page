/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Poppins`],
        display: "swap",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
  ],
}
