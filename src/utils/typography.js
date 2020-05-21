import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

// We want bigger headings than the default
// fairyGatesTheme.scaleRatio = 2;

const typography = new Typography(fairyGatesTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;

export default typography;
