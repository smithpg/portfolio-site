import React from 'react';
import { renderToString } from 'react-dom/server';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
