import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';

const BlogPostListing = ({ title, slug }) => (
  <Styled.li as={Link} to={slug}>
    <span>{title}</span>
  </Styled.li>
);

export default BlogPostListing;
