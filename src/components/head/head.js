import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import schemaGenerator from 'helpers/schemaGenerator';

const Head = ({
  siteTitle,
  siteUrl,
  pageTitle,
  pageTitleFull = pageTitle ? `${siteTitle}: ${pageTitle}` : siteTitle,
  location,
  canonical = siteUrl + (location.pathname || ''),
}) => (
  <Helmet>
    <html lang="en" />

    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
      name="viewport"
    />

    <meta content={siteTitle} name="apple-mobile-web-app-title" />
    <meta content={pageTitleFull} property="og:title" />
    <meta content={pageTitleFull} name="twitter:title" />
    <title>{pageTitleFull}</title>

    <meta content={siteTitle} name="application-name" />

    <meta content="website" property="og:type" />
    <meta content={siteTitle} property="og:site_name" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={pageTitleFull} name="twitter:text:title" />
    <meta content={canonical} property="og:url" />
    <meta content={canonical} name="twitter:url" />
    <link rel="canonical" href={canonical} />

    <link
      href="/icons/apple-touch-icon-57x57.png"
      rel="apple-touch-icon"
      sizes="57x57"
    />
    <link
      href="/icons/apple-touch-icon-60x60.png"
      rel="apple-touch-icon"
      sizes="60x60"
    />
    <link
      href="/icons/apple-touch-icon-72x72.png"
      rel="apple-touch-icon"
      sizes="72x72"
    />
    <link
      href="/icons/apple-touch-icon-76x76.png"
      rel="apple-touch-icon"
      sizes="76x76"
    />
    <link
      href="/icons/apple-touch-icon-114x114.png"
      rel="apple-touch-icon"
      sizes="114x114"
    />
    <link
      href="/icons/apple-touch-icon-120x120.png"
      rel="apple-touch-icon"
      sizes="120x120"
    />
    <link
      href="/icons/apple-touch-icon-144x144.png"
      rel="apple-touch-icon"
      sizes="144x144"
    />
    <link
      href="/icons/apple-touch-icon-152x152.png"
      rel="apple-touch-icon"
      sizes="152x152"
    />
    <link
      href="/icons/apple-touch-icon-167x167.png"
      rel="apple-touch-icon"
      sizes="167x167"
    />
    <link
      href="/icons/apple-touch-icon-180x180.png"
      rel="icon"
      sizes="180x180"
      type="image/png"
    />

    <link
      href="/icons/favicon-32x32.png"
      rel="icon"
      sizes="32x32"
      type="image/png"
    />
    <link
      href="/icons/favicon-16x16.png"
      rel="icon"
      sizes="16x16"
      type="image/png"
    />

    <script type="application/ld+json">
      {JSON.stringify(
        schemaGenerator({
          location,
          canonical,
          siteUrl,
          pageTitle,
          siteTitle,
          pageTitleFull,
        })
      )}
    </script>
  </Helmet>
);

Head.propTypes = {
  siteTitle: PropTypes.string,
  siteTitleShort: PropTypes.string,
  siteUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  canonical: PropTypes.string,
  pageTitle: PropTypes.string,
  pageTitleFull: PropTypes.string,
  location: PropTypes.object.isRequired,
};

const HeadWithQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteTitleShort
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <Location>
        {({ location }) => (
          <Head {...data.site.siteMetadata} {...props} location={location} />
        )}
      </Location>
    )}
  />
);

export default HeadWithQuery;
