import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { FaStripe } from 'react-icons/fa';

import {
  DiGithubBadge as GithubIcon,
  DiNodejs,
  DiJavascript,
  DiCss3,
  DiSass,
  DiHtml5,
  DiReact,
  DiMongodb,
  DiMysql,
  DiHeroku,
} from 'react-icons/di';
import { AiOutlineLink as DemoIcon } from 'react-icons/ai';

const skillIcons = {
  JavaScript: DiJavascript,
  CSS3: DiCss3,
  Sass: DiSass,
  NodeJs: DiNodejs,
  HTML5: DiHtml5,
  React: DiReact,
  MongoDB: DiMongodb,
  mySQL: DiMysql,
  Stripe: FaStripe,
  Heroku: DiHeroku,
};

const ProjectContainer = styled.div`
  ul {
    list-style: none;
  }
`;

const Project = ({ title, description, githubLink, demoLink, techUsed }) => (
  <ProjectContainer>
    <h2>{title}</h2>
    <ul style={{ position: 'relative', top: -10 }}>
      {techUsed.map(techName => {
        const SkillIcon = skillIcons[techName];
        return (
          <li key={techName} style={{ display: 'inline', marginRight: 5 }}>
            <SkillIcon />
          </li>
        );
      })}
    </ul>
    <p>{description}</p>
    <ul>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <GithubIcon />
        <a style={{ fontSize: '1.2rem', marginLeft: 5 }} href={githubLink}>
          View on Github
        </a>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <DemoIcon />
        <a style={{ fontSize: '1.2rem', marginLeft: 5 }} href={demoLink}>
          View Live
        </a>
      </li>
    </ul>
  </ProjectContainer>
);

const PostContainer = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Index = ({ data }) => (
  <Layout>
    <Box>
      <p className="welcome">
        Welcome to the <br></br>
        <em>tastefully minimalistic</em> <br></br> portfolio page of
        <strong> Patrick Smith</strong>
      </p>
    </Box>
    <Box>
      <Title as="h2" size="large">
        Skills
      </Title>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.entries(skillIcons).map(([skillName, Icon]) => (
          <li key={skillName} style={{ display: 'flex', alignItems: 'center' }}>
            <Icon />
            <span style={{ fontSize: '1.2rem', marginLeft: 5 }}>
              {skillName}
            </span>
          </li>
        ))}
      </ul>
    </Box>
    <Box>
      <Title as="h2" size="large">
        Projects
      </Title>
      {data.allProjectsJson.edges.map(p => (
        <Project {...p.node} key={p.node.id} />
      ))}
    </Box>

    <Box>
      <Title as="h2" size="large">
        Blog
      </Title>
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <PostContainer key={post.id}>
          <Link to={post.fields.slug}>
            <strong>{post.frontmatter.title}</strong>
          </Link>
        </PostContainer>
      ))}
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
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
`;
