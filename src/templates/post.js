import React from 'react';
import { graphql } from 'gatsby';

export default function Post({ data }) {
  return (
    <div>
      {JSON.stringify(data)}

      {/* <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </div>
  );
}

export const query = graphql`
  query($title: String!) {
    postsJson(title: { eq: $title }) {
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
