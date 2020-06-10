/** @jsx jsx */

import { Flex, Styled, jsx } from 'theme-ui';
import { Link } from 'gatsby';

export default function Navbar({ links, sx }) {
  return (
    <Flex
      as="nav"
      sx={{
        bg: 'white',
        zIndex: 99,
        position: 'sticky',
        top: 0,
        left: 0,
        justifyContent: 'center',
        p: 1,
        boxShadow: '0px 0px 10px -3px rgba(0,0,0,0.4)',
      }}
    >
      {links.map(link => (
        <Styled
          key={link.display}
          as={Link}
          to={'/' + link.path}
          sx={{
            mx: 1,
            p: [3, 10],
            textAlign: `center`,
            textDecoration: `none`,
            backgroundImage: 'none',
            ':hover': {
              bg: `muted`,
              borderRadius: `5px`,
            },
          }}
        >
          {link.display}
        </Styled>
      ))}
    </Flex>
  );
}
