import * as Gatsby from "gatsby";

export const title = `Test cats and dogs`;
export const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
export const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: `Test cats and dogs`,
    },
  },
};
