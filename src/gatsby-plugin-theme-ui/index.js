import nightOwl from '@theme-ui/prism/presets/night-owl';
export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',
    coral: 'rgb(28, 160, 134)',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],

  text: {
    heading: { fontSize: [2, 3, 5] },
  },

  links: {
    nav: {
      cursor: 'pointer',
    },
  },

  cards: {
    primary: {
      padding: 25,
      px: [25, null, 35],
      bg: 'white',
      boxShadow:
        '10px -2px 30px rgba(0,0,0,0.1), 0px 0px 10px -10px rgba(0,0,0,0.15)',
      borderRadius: 5,
    },
  },
  container: {
    maxWidth: [500, 500, 900],
    px: [3, 3, 2],
    position: 'relative',
    variants: {
      fullWidth: {
        width: '100vw',
        bg: 'red',
      },
    },
  },

  styles: {
    h1: {
      mb: [3],
      fontSize: [5, 6, 7],
    },

    h2: {
      mb: [2, 2, 4],
      fontSize: [4, 5, 6],
      fontWeight: 'light',
    },

    h3: {
      mb: 2,
      fontSize: [3, 4, 5],
      fontWeight: 'light',
    },

    p: { fontSize: [1, 2, 3] },
    ul: { mx: 0 },
    li: { p: 1, display: 'block' },
    pre: {
      ...nightOwl,
      padding: [2, 3, 4],
      fontSize: [1, 2],
      whiteSpace: 'pre-wrap',
      minWidth: '500px',
    },
  },
};
