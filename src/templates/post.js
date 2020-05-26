import React from 'react';
import { graphql } from 'gatsby';

import Link from 'components/link';
import Layout from 'components/layout';

/*@jsx jsx */

import { jsx, Box } from 'theme-ui';

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
          position: 'fixed',
          right: 10,
          bottom: 10,
          color: 'white',
          bg: 'coral',
          p: 2,
          borderRadius: '5px',
          zIndex: 99,
        }}
      >
        ← Return to Home
      </Link>
      <Box sx={{ maxWidth: 700, m: 'auto' }}>
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
