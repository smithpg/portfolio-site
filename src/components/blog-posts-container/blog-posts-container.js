import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import BlogPostListing from './blog-post-listing';

/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';

const BlogPostsContainer = ({ posts }) => {
  console.log(posts);

  return (
    <Styled.ul sx={{ listStyle: 'none' }}>
      {posts.map(post => {
        const {
          frontmatter: { title },
          fields: { slug },
        } = post;

        return <BlogPostListing title={title} slug={slug} key={slug} />;
      })}
    </Styled.ul>
  );
};

export default BlogPostsContainer;

// export const query = graphql`
//   query HomepageQuery {
//     allProjectsJson {
//       edges {
//         node {
//           id
//           title
//           description
//           githubLink
//           demoLink
//           techUsed
//         }
//       }
//     }
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
