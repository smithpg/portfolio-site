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
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  window.setTimeout(performTransition, timeout);
  return false;
};

function performTransition() {
  window.scrollTo(0, 0);
}
