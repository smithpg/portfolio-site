import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';

export default function Post({ data }) {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <Layout>
      <Box>
        <Link to="/">← Return to Home</Link>
      </Box>
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
