// import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql, Link } from 'gatsby';
// import styled from 'styled-components';
// import { rhythm, scale } from '../utils/typography';

// import Layout from 'components/layout';
// import Box from 'components/box';
// import Title from 'components/title';
// import { motion } from 'framer-motion';

// // Icon Imports
// import { FaStripe } from 'react-icons/fa';

// import {
//   DiGithubBadge as GithubIcon,
//   DiNodejs,
//   DiJavascript,
//   DiCss3,
//   DiSass,
//   DiHtml5,
//   DiReact,
//   DiMongodb,
//   DiMysql,
//   DiHeroku,
// } from 'react-icons/di';

// const skillIcons = {
//   JavaScript: DiJavascript,
//   CSS3: DiCss3,
//   Sass: DiSass,
//   NodeJs: DiNodejs,
//   HTML5: DiHtml5,
//   React: DiReact,
//   MongoDB: DiMongodb,
//   mySQL: DiMysql,
//   Stripe: FaStripe,
//   Heroku: DiHeroku,
// };

// const Welcome = () => {
//   const colors = ['#F65058FF', '#FBDE44FF', '#28334AFF'];
//   const decorativeElements = (
//     <div style={{ display: 'flex', margin: '10px 0px' }}>
//       {colors.map((color, i) => (
//         <motion.div
//           key={color}
//           style={{
//             height: 20,
//             width: 20,
//             marginRight: 10,
//             backgroundColor: color,
//             borderRadius: '50%',
//           }}
//           custom={i}
//           animate={{
//             x: 10,
//             opacity: [0, 1],
//           }}
//           transition={{ duration: 1, delay: 0.5 * i }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <Box>
//       <h1 className="welcome">
//         {"Hi. I'm Patrick"}
//         <span
//           style={{ marginLeft: '1rem' }}
//           aria-label={'waving emoji'}
//           role={'img'}
//           className={'waving-hand'}
//         >
//           👋
//         </span>
//       </h1>
//       {decorativeElements}
//     </Box>
//   );
// };

// const ProjectContainer = styled.div`
//   padding: 25px 50px;
//   box-shadow: inset 10px 0px 30px -10px rgba(0, 0, 0, 0.3);
//   border: 1px solid rgba(0, 0, 0, 0.3);
//   border-radius: 5px;
//   margin: 15px 0px;

//   h3 {
//     margin-bottom: ${rhythm(0.5)};
//     text-align: center;
//   }

//   .techUsed {
//     margin-bottom: 25px;
//     display: flex;
//     justify-content: center;
//   }

//   p {
//     margin-bottom: ${rhythm(2)};
//   }

//   ul {
//     list-style: none;
//   }

//   .list-of-links {
//     margin-top: 15px;
//     display: flex;
//     /* flex-direction: column; */
//     align-items: center;
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   .project-link {
//     padding: 10px 15px;
//     border: 1px solid rgba(0, 0, 0, 0.3);
//     min-width: 200px;
//     width: 35%;
//     text-align: center;
//     border-radius: 5px;
//     margin-right: 5px;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     a {
//       margin-left: 5px;
//     }
//   }
// `;

// const Project = ({ title, description, githubLink, demoLink, techUsed }) => (
//   <ProjectContainer>
//     <h3>{title}</h3>
//     <ul className="techUsed">
//       {techUsed.map(techName => {
//         const SkillIcon = skillIcons[techName];
//         return (
//           <li key={techName} style={{ display: 'inline', marginRight: 5 }}>
//             <SkillIcon />
//           </li>
//         );
//       })}
//     </ul>
//     <p>{description}</p>
//     <ul className="list-of-links">
//       <li className={'project-link'}>
//         <GithubIcon />
//         <a href={githubLink}>View on Github</a>
//       </li>
//       <li className={'project-link'}>
//         <DemoIcon />
//         <a href={demoLink}>View Live</a>
//       </li>
//     </ul>
//   </ProjectContainer>
// );

// const PostContainer = styled.div`
//   padding: 0.5rem 1rem;
//   margin-bottom: ${rhythm(1)};
// `;

// const Index = ({ data }) => (
//   <Layout>
//     <Welcome />
//     <Box>
//       <Title as="h2" size="large">
//         Skills
//       </Title>
//       <ul
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           flexWrap: 'wrap',
//           height: 200,
//         }}
//       >
//         {Object.entries(skillIcons).map(([skillName, Icon]) => (
//           <li key={skillName} style={{ display: 'flex', alignItems: 'center' }}>
//             <Icon />
//             <span style={{ marginLeft: 5 }}>{skillName}</span>
//           </li>
//         ))}
//       </ul>
//     </Box>
//     <Box>
//       <Title as="h2" size="large">
//         Projects
//       </Title>
//       {data.allProjectsJson.edges.map(p => (
//         <Project {...p.node} key={p.node.id} />
//       ))}
//     </Box>

//     <Box>
//       <Title as="h2" size="large">
//         Blog
//       </Title>
//       {data.allMdx.edges.map(({ node: post }) => (
//         <PostContainer key={post.id}>
//           <Link to={post.fields.slug}>
//             <strong>{post.frontmatter.title}</strong>
//           </Link>
//         </PostContainer>
//       ))}
//     </Box>
//   </Layout>
// );

// Index.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export default Index;

// export const query = graphql`
//   query HomepageQuery {
//     allProjectsJson {
//       edges {
//         node {
//           id
//           title
//           description
//           githubLink
//           demoLink
//           techUsed
//         }
//       }
//     }
//     allMdx {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
