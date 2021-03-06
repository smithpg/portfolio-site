const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content/posts` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async function({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach(({ node }) => {
    console.log(JSON.stringify(node));
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
