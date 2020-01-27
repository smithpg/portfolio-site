import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`query siteQuery{site {
    id
    siteMetadata {
      siteTitle
    }
  }}`)
  
 return ( 
  <div>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
  </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
