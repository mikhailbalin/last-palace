module.exports = {
  siteMetadata: {
    title: 'Last Palace',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'src/images/icon.png',
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
};
