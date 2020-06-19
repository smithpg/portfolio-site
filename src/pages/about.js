import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import BackgroundSVG from 'components/backgroundSVG';
import { skillIcons } from 'components/skillIcons';
import Layout from 'components/layout';
import Headshot from 'components/headshot';

/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';

const Index = () => {
  return (
    <>
      <BackgroundSVG />
      <Layout>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: ['center', 'center', 'left'],
            justifyContent: 'space-evenly',
            alignItems: 'center',
            my: 5,
            py: 4,
          }}
        >
          <div>
            <Styled.h2 sx={{ my: 1 }}>{'About Me'}</Styled.h2>
            <Styled.p>
              {`I'm a recent graduate of Oregon State University's Computer Science program seeking front-end, back-end, or fullstack work.`}
            </Styled.p>
            <Styled.p>
              {`Feel free to drop me a line at patrickgromersmith@gmail.com.`}
            </Styled.p>
          </div>
        </Card>
      </Layout>
    </>
  );
};

export default Index;
