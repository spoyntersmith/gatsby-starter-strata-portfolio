module.exports = {
  siteMetadata: {
    title: "Séan Poynter-Smith - Web Developer",
    author: "Séan Poynter-Smith",
    description: "Personal site for Web Developer in Windsor, UK"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'séan-poynter-smith',
        short_name: 'séan',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/android-chrome-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
