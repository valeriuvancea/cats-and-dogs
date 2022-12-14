import { graphql, Link, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 25px auto;
`;

const Header = styled.nav`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
`;

const baseButton = css`
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

const baseButtonHover = css`
  background-color: green;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:link,
  &:visited {
    ${baseButton}
  }
  &:hover,
  &:active {
    ${baseButtonHover}
  }
`;

export const Button = styled.button`
  cursor: pointer;
  ${baseButton}
  &:hover {
    ${baseButtonHover}
  }
`;

const Content = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0;
`;

const Footer = styled.footer`
  border: 1px solid black;
  padding: 10px;
  text-align: center;
`;

interface Metadata {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const TemplatePage: React.FC<PropsWithChildren> = ({ children }) => {
  const data: Metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Main>
      <Header>
        <StyledLink to="/">Cats</StyledLink>
        <StyledLink to="/dogs">Dogs</StyledLink>
      </Header>
      <Content>{children}</Content>
      <Footer>
        {data.site.siteMetadata.title} - {new Date().getFullYear()}{" "}
      </Footer>
    </Main>
  );
};

export default TemplatePage;
