import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import BlogPostListing from './blog-post-listing';

/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const BlogPostsContainer = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
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
  `);

  const posts = data.allMarkdownRemark.edges.map(e => e.node);

  return (
    <Styled.ul>
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
