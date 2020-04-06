import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'components/head';
import GlobalStyle from 'global.css.js';

const Container = styled.div`
  padding-top: 15vh;
  max-width: 700px;
  margin: 0px auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head />
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
