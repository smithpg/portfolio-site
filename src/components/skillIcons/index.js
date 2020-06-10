// Icon Imports
import React from 'react';
import { FaStripe } from 'react-icons/fa';
import { GrGatsbyjs } from 'react-icons/gr';
import {
  DiGithubBadge as GithubIcon,
  DiNodejs,
  DiJavascript,
  DiCss3,
  DiSass,
  DiHtml5,
  DiReact,
  DiMongodb,
  DiMysql,
  DiHeroku,
  DiChrome,
} from 'react-icons/di';
import { AiOutlineLink as DemoIcon } from 'react-icons/ai';

import { Icon, InlineIcon } from '@iconify/react';
import netlifyIcon from '@iconify/icons-logos/netlify';

const NetlifyIcon = () => <Icon icon={netlifyIcon} />;

export const skillIcons = {
  JavaScript: DiJavascript,
  CSS3: DiCss3,
  Sass: DiSass,
  NodeJs: DiNodejs,
  HTML5: DiHtml5,
  React: DiReact,
  MongoDB: DiMongodb,
  mySQL: DiMysql,
  Stripe: FaStripe,
  Heroku: DiHeroku,
  Chrome: DiChrome,
  Gatsby: GrGatsbyjs,
  Netlify: NetlifyIcon,
};
