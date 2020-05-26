import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';

/*@jsx jsx */

import { jsx } from 'theme-ui';

export default function Post({ data }) {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <Layout>
      <Link
        to="/"
        sx={{
          display: 'inline-block',
          position: 'sticky',
          left: 0,
          top: 100,
          color: 'white',
          bg: 'accent',
        }}
      >
        ← Return to Home
      </Link>
      <Box>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
