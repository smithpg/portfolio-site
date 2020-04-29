import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import { timeout } from 'constants/transition';
// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;

// Prevent unsightly scroll to top on exit transitions
export const shouldUpdateScroll = ({
  pathname,
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  function performTransition() {
    console.log(getSavedScrollPosition(pathname));
    window.scrollTo(...(getSavedScrollPosition(location) || [0, 200]));
  }

  console.log(pathname);
  console.log(location);
  window.setTimeout(performTransition, timeout.milliseconds);
  return false;
};

// export const shouldUpdateScroll = () => false;
