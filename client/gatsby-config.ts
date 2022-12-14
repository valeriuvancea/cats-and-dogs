import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Cats and dogs`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components"],
};

export default config;
