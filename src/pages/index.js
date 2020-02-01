import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import styled from 'styled-components'

import { DiGithubBadge as GithubIcon } from 'react-icons/di'
import { AiOutlineLink as DemoIcon } from 'react-icons/ai'

const ProjectContainer = styled.div`

  ul{list-style: none;}
`
const Project = ({ title, description, githubLink, demoLink }) => (
  <ProjectContainer>
    <h2>{title}</h2>
    <p>{description}</p>
    <ul>
      <li><GithubIcon /> <a href={githubLink}>View on Github</a></li>
      <li><DemoIcon /> <a href={demoLink}>View Live</a></li>
    </ul>
  </ProjectContainer>
)

const Index = ({ data }) => (
  <Layout>
    <Box>

      <p className="welcome">Welcome to the <br></br><em>tastefully minimalistic</em> <br></br> portfolio page of  <strong>Patrick Smith</strong></p>
    </Box>
    <Box>
      <Title as="h2" size="medium">
        Projects
      </Title>
      {/* {JSON.stringify(data)} */}
      {data.allProjectsJson.edges.map(p => <Project {...p.node} key={p.node.id} />)}
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
        }
      }
    }
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
