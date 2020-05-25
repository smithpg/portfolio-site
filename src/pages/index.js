import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import BackgroundSVG from 'components/backgroundSVG';
import BlogPostsContainer from 'components/blog-posts-container';
import { skillIcons } from 'components/skillIcons';
import Layout from 'components/layout';
import Headshot from 'components/headshot';

/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';

const Index = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges.map(e => e.node);

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
          <Styled.h2>Blog Posts</Styled.h2>
          <BlogPostsContainer posts={blogPosts} />
        </Box>
      </Layout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    allProjectsJson {
      edges {
        node {
          id
          title
          description
          githubLink
          demoLink
          techUsed
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

/**
 *  Unused image query:

      allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }


 */

const lorem = `It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).`;
