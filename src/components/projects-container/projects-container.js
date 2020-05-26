import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectCard from './project-card';

/** @jsx jsx */
import {
  Container,
  Box,
  Grid,
  Card,
  Button,
  Flex,
  jsx,
  Styled,
} from 'theme-ui';

const ProjectsContainer = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

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

  const isSelected = project => project.id === selectedProjectId;

  return (
    <Styled.ul
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '15px',
        position: 'relative',
      }}
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
          isSelected={isSelected(project)}
          onClick={e => {
            if (selectedProjectId === project.id) {
              setSelectedProjectId(null);
            } else {
              setSelectedProjectId(project.id);
            }
          }}
        />
      ))}
    </Styled.ul>
  );

  // return (
  //   <motion.ul sx={containerStyles}>
  //     {projects.map((project, i) => (
  //       <motion.li
  //         key={i}
  //         sx={{
  //           zIndex: projects.length - i,
  //           listStyle: 'none',
  //           ml: i > 0 ? -30 : 0,
  //         }}
  //         whileHover={{ y: -10, zIndex: projects.length }}
  //       >
  //         <ProjectCard project={project} />
  //       </motion.li>
  //     ))}
  //   </motion.ul>
  // );
};

export default ProjectsContainer;
