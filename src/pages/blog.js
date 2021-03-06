import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from 'components/layout';

/** @jsx jsx */
import { Box, Card, Button, jsx, Styled } from 'theme-ui';

const Index = ({ data }) => {
  return (
    <Layout>
      <Box>
        <Styled.h2>All Posts</Styled.h2>
      </Box>
      <Box>
        {data.allMdx.edges.map(({ node: post }) => (
          <Card key={post.id}>
            <Link to={post.fields.slug}>
              <strong>{post.frontmatter.title}</strong>
            </Link>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query BlogQuery {
    allMdx {
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
