import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

/* @jsx jsx */

export default function CustomLink(props) {
  return (
    <Link
      {...props}
      sx={{
        textDecoration: 'none',
        backgroundImage: 'none',
        textShadow: 'none',
      }}
    />
  );
}
