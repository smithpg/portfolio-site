import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Link from 'components/link';
import Layout from 'components/layout';

/*@jsx jsx */

import { jsx, Box } from 'theme-ui';

export default function Post({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;

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
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      id
      excerpt(pruneLength: 160)

      frontmatter {
        title
        date(formatString: "MM DD, YYYY")
      }
    }
  }
`;
