import React from 'react';
import PropTypes from 'prop-types';
import Head from 'components/head';

import Navbar from 'components/navbar';

/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Navbar links={['Home', 'About', 'Blog']} />
      <Container sx={{ mt: [1, 2, 3] }}>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
