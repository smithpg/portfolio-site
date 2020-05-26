import React from 'react';
import Img from 'gatsby-image';
import { navigate } from '@reach/router';
/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';
import { motion } from 'framer-motion';

import { DiGithubBadge as GithubIcon } from 'react-icons/di';
import { AiOutlineLink as DemoIcon } from 'react-icons/ai';

const LinkButton = ({ href, children }) => {
  const btnStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    bg: 'coral',
    px: 3,
    py: 2,
    mt: 2,
    cursor: 'pointer',
  };

  return (
    <Button sx={btnStyles} onClick={() => navigate(href)}>
      {children}
    </Button>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 400,
        width: 300,
        mb: 3,
      }}
    >
      <Styled.h3 sx={{ my: 2 }}>{project.title}</Styled.h3>
      <p sx={{ textOverflow: 'ellipsis', overflow: 'hidden', height: 100 }}>
        {project.description}
      </p>
      <Flex sx={{ flexDirection: 'column' }}>
        <LinkButton href={project.githubLink}>
          <span>View on Github</span>
          <GithubIcon />
        </LinkButton>
        <LinkButton href={project.demoLink}>
          <span>View Live Demo</span>
          <DemoIcon />
        </LinkButton>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
