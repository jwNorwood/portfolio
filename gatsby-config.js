module.exports = {
  siteMetadata: {
    title: "Jacob Norwood - Kansas City Web Designer",
    author: "Jacob Norwood",
    description: "I create engaging websites and emails that help to grow your brand and drive engagement."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-58093951-4",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
