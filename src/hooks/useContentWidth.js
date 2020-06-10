import React, { useRef, useState, useEffect } from 'react';

function getCharacterWidth(ref) {
  // TODO: Handle case in which ref'd element has
  // css rules that apply to span, e.g.:
  // scale transforms
  // width settings
  // fontSize, fontFamily settings

  // returns the width in pixels of the 'M' character
  // rendered

  const testNode = document.createElement('span');
  testNode.style.boxSizing = 'content-box';
  testNode.style.position = 'absolute';
  testNode.style.opacity = 0;

  testNode.appendChild(document.createTextNode('M'));

  ref.current.appendChild(testNode);

  return window.getComputedStyle(testNode).width;
}

const useContentWidth = function() {
  const ref = useRef();
  const [computedStyle, setComputedStyle] = useState();

  useEffect(() => {
    console.log(ref);
    setComputedStyle(window.getComputedStyle(ref.current));
  }, []);

  let contentWidth = {};
  if (computedStyle) {
    console.log(`character width: ${getCharacterWidth(ref)}`);
    const characterWidth = getCharacterWidth(ref);
    const width = Number(computedStyle['width'].slice(0, -2));
    const paddingLeft = Number(computedStyle['padding-left'].slice(0, -2));
    const paddingRight = Number(computedStyle['padding-right'].slice(0, -2));
    const boxSizing = Number(computedStyle['box-sizing'].slice(0, -2));
    const fontSize = Number(computedStyle['font-size'].slice(0, -2));

    console.log(paddingRight, width, fontSize);
    if (boxSizing === 'content-box') {
      contentWidth.px = width;
    } else {
      const paddingX = paddingLeft + paddingRight;

      contentWidth.px = width - paddingX;
    }

    contentWidth.chars = Math.floor(
      contentWidth.px / characterWidth.slice(0, -2)
    );
  } else {
    contentWidth = null;
  }

  return {
    ref,
    contentWidth,
  };
};

export default useContentWidth;
