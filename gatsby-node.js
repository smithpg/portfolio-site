const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

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

exports.createPages = async function({ graphql, actions }) {
  const { data } = await graphql(`
    {
      allPostsJson {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  data.allPostsJson.edges.forEach(({node}) => {
    console.log(JSON.stringify(node));
    actions.createPage({
      path: node.title,
      component: path.resolve('./src/templates/post.js'),
      context: {
        title: node.title,
      },
    });
  });
};
