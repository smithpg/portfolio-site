import Typography from 'typography';
import judahTheme from 'typography-theme-judah';

// We want bigger headings than the default
judahTheme.scaleRatio = 3;

const typography = new Typography(judahTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;

export default typography;
