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

const SectionTitle = ({ children }) => (
  <Styled.h2
    sx={{
      textAlign: ['center', 'left', 'left'],
      my: [5, 5, 5],
      textTransform: ['uppercase', 'none', 'none'],
    }}
  >
    {children}
  </Styled.h2>
);

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
          <SectionTitle>Projects</SectionTitle>
          <ProjectsContainer />
        </Box>
        <Box>
          <SectionTitle>Blog Posts</SectionTitle>
          <BlogPostsContainer />
        </Box>
      </Layout>
    </>
  );
};

export default Index;
