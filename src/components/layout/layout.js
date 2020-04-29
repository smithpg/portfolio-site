import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'components/head';
import GlobalStyle from 'global.css.js';
import MEDIA from 'helpers/mediaTemplates';

import { rhythm } from '../../utils/typography';

const Container = styled.div`
  padding-top: 15vh;

  max-width: 700px;
  margin: 0px auto;

  ${MEDIA.TABLET`padding: ${rhythm(1)}`}
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
