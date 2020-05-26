import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';

import ProjectCard from './project-card';

/** @jsx jsx */
import { Container, Box, Card, Button, Flex, jsx, Styled } from 'theme-ui';

const ProjectsContainer = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            githubLink
            demoLink
            techUsed
          }
        }
      }
    }
  `);

  let projects = data.allProjectsJson.edges.map(e => e.node);
  projects = [...projects, ...projects];

  const containerStyles = {
    display: 'flex',
    py: 4,
    overflowX: 'scroll',
    '::after': {
      content: '""',
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundImage: 'linear-gradient(to right, transparent, white)',
      zIndex: projects.length + 1,
      pointerEvents: 'none',
    },
  };

  return (
    <motion.ul sx={containerStyles}>
      {projects.map((project, i) => (
        <motion.li
          key={i}
          sx={{
            zIndex: projects.length - i,
            listStyle: 'none',
            ml: i > 0 ? -30 : 0,
          }}
          whileHover={{ y: -10, zIndex: projects.length }}
        >
          <ProjectCard project={project} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProjectsContainer;
