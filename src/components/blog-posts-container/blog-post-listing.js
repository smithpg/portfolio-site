import React from 'react';
import Link from 'components/link';
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
      transition: '200ms transform',
      ':hover': {
        bg: 'muted',
        transform: 'translateY(-3px)',
      },
    }}
  >
    <span>{title}</span>
  </Styled.li>
);

export default BlogPostListing;
