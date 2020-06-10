import React from 'react';
import Img from 'gatsby-image';
import { navigate } from '@reach/router';

/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';
import { motion } from 'framer-motion';

import { skillIcons } from 'components/skillIcons';
import { DiGithubBadge as GithubIcon } from 'react-icons/di';
import { AiOutlineLink as DemoIcon } from 'react-icons/ai';

const LinkButton = ({ href, children }) => {
  const btnStyles = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    bg: 'white',
    border: '1px solid white',
    borderColor: 'coral',
    color: 'coral',
    px: 3,
    py: 2,
    mr: [0, 2, 2],
    mb: [2, 0, 0],
    cursor: 'pointer',
    fontSize: [1, 1, 1],

    '& > span': {
      mr: 2,
    },
  };

  return (
    <Button sx={btnStyles} onClick={() => window.open(href)}>
      {children}
    </Button>
  );
};

const ProjectCard = ({ project, ...props }) => {
  return (
    <Card
      {...props}
      sx={{
        gridColumn: ['span 2', 'span 2', 'span 1'],
        display: 'grid',
        gridGap: [3, 1, 1],
        gridTemplateRows: [
          'min-content min-content auto auto',
          'min-content 50px auto 50px',
        ],
      }}
    >
      <Styled.h3 sx={{ my: 2 }}>{project.title}</Styled.h3>
      <Flex sx={{ '& path': { fill: 'black' }, alignItems: 'center' }}>
        {project.techUsed.map(techName => {
          const IconComponent = skillIcons[techName];
          return <IconComponent alt={techName} key={techName} sx={{ mr: 1 }} />;
        })}
      </Flex>
      <Styled.p>{project.description}</Styled.p>
      <Flex
        sx={{
          flexDirection: ['column', 'row', 'row'],
          justifyContent: 'center',
        }}
      >
        <LinkButton href={project.githubLink}>
          <span>View on Github</span>
          <GithubIcon />
        </LinkButton>
        {project.demoLink && (
          <LinkButton href={project.demoLink}>
            <span>View Live Demo</span>
            <DemoIcon />
          </LinkButton>
        )}
      </Flex>
    </Card>
  );
};

export default ProjectCard;
