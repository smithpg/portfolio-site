import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import BackgroundSVG from 'components/backgroundSVG';
import BlogPostsContainer from 'components/blog-posts-container';
import ProjectsContainer from 'components/projects-container';
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
            flexDirection: ['column', 'column', 'row'],
            textAlign: ['center', 'center', 'left'],
            justifyContent: 'space-evenly',
            alignItems: 'center',
            my: 5,
            py: 5,
          }}
        >
          <Headshot />
          <div>
            <Styled.h1>{"Hi, I'm Patrick"}</Styled.h1>
            <Styled.p sx={{ color: ['black', 'black', 'coral'] }}>
              {"I'm a fullstack developer with broad javascript experience"}
            </Styled.p>
          </div>
        </Card>
        <Box>
          <Styled.h2>Projects</Styled.h2>
          <ProjectsContainer />
        </Box>
        <Box>
          <Styled.h2>Blog Posts</Styled.h2>
          <BlogPostsContainer />
        </Box>
      </Layout>
    </>
  );
};

export default Index;
