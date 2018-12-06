import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <article>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="" />
      </Helmet>
      <h1>Page not found.</h1>
    </article>
  );
}
