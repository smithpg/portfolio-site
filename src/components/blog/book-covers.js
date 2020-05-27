import React from 'react';

export const TheDecisionCover = () => {
  const containerStyle = {
    display: 'grid',
    gridGap: '5px',
    gridTemplate: 'max-content max-content / 1fr 1fr',
    textTransform: 'uppercase',
  };

  const titleStyle = {
    color: '#ad05e1',
    gridArea: '1 / 1 / 2 / 3',
    textAlign: 'right',
  };

  const authorStyle = {
    color: '#5dfafd',
    gridArea: '2 / 2 / 3 / 3',
    textAlign: 'left',
  };

  const subtitleStyle = {
    color: '#b78639',
    gridArea: '2 / 1 / 3 / 2',
    textAlign: 'right',
  };

  return (
    <div style={containerStyle}>
      <span id="title" style={titleStyle}>
        The <br />
        Decision
      </span>
      <span id="author" style={authorStyle}>
        Kevin Hart
      </span>
      <span style={subtitleStyle}>
        {"Overcoming today's BS for tomorrow's success"}
      </span>
    </div>
  );
};
