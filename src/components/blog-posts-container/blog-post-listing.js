import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const BlogPostListing = ({ title, slug }) => (
  <Styled.li
    as={Link}
    to={slug}
    sx={{
      textDecoration: 'none',
      backgroundImage: 'none',
      background: 'white',
      textShadow: 'none',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 5,
      mb: 2,
      p: 3,
    }}
  >
    <span>{title}</span>
  </Styled.li>
);

export default BlogPostListing;
