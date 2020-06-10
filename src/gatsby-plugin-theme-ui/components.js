import Prism from '@theme-ui/prism';
import React from 'react';

const CodeContainer = ({ children }) => (
  <div style={{ overflow: 'auto' }}>{children}</div>
);

export default {
  pre: CodeContainer,
  code: Prism,
};
