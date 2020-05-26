/** @jsx jsx */

import { Styled, jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Headshot() {
  const res = useStaticQuery(graphql`
    query HeadshotQuery {
      allImageSharp(filter: { fluid: { src: { regex: "/salamander/" } } }) {
        edges {
          node {
            fluid(cropFocus: SOUTHWEST) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `);

  const imgFluid = res.allImageSharp.edges[0].node.fluid;

  let containerStyle = {
    borderRadius: '50%',
    width: [150, 200],
    overflow: 'hidden',
  };
  return (
    <Styled.div style={containerStyle}>
      <Img fluid={imgFluid} alt={'headshot'} />
    </Styled.div>
  );
}
