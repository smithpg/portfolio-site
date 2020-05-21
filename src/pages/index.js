import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import useBoundingRect from 'hooks/useBoundingRect';
import Floater from 'components/floater';
import { skillIcons } from 'components/skillIcons';
import Layout from 'components/layout';
import Navbar from 'components/navbar';

/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';

console.log(skillIcons);

const Index = ({ data }) => {
  const [ref, boundingRect] = useBoundingRect();

  console.log(boundingRect);

  return (
    <>
      <Navbar links={['Home', 'About', 'Blog']} />
      <Container sx={{ mt: [1, 2, 3] }}>
        <Card
          sx={{
            textAlign: 'center',
            p: 5,
            my: 5,
            position: 'relative',
            overflow: 'hidden',
            perspective: 100,
          }}
          ref={ref}
        >
          {boundingRect &&
            Object.entries(skillIcons).map(([iconName, Component]) => (
              <Floater
                key={iconName}
                aria-label={iconName}
                parentDimensions={boundingRect}
              >
                <Component />
              </Floater>
            ))}

          <Styled.h1>{"Hi, I'm Patrick"}</Styled.h1>
          <Styled.p sx={{}}>
            {"I'm a fullstack developer with broad javascript experience"}
          </Styled.p>
        </Card>

        <Card></Card>

        <Box
          sx={{
            borderRadius: 5,
          }}
        >
          <Styled.h2>What I do</Styled.h2>
          <Styled.p>{lorem}</Styled.p>
        </Box>
        <Box
          sx={{
            borderRadius: 5,
          }}
        >
          <Styled.h2>What I do</Styled.h2>
          <Styled.p>{lorem}</Styled.p>
        </Box>
        <Box
          sx={{
            borderRadius: 5,
          }}
        >
          <Styled.h2>What I do</Styled.h2>
          <Styled.p>{lorem}</Styled.p>
        </Box>
      </Container>
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
