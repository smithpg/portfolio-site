import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from 'components/layout';

/** @jsx jsx */
import { Box, Card, Button, jsx } from 'theme-ui';

const Index = ({ data }) => {
  return (
    <Layout>
      <Box>
        {data.allMarkdownRemark.edges.map(({ node: post }) => (
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
