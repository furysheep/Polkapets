import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Footer } from 'app/components/Footer';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Polka Pets World</title>
        <meta name="description" content="Polka Pets World" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        <Features />
      </PageWrapper>
      <Footer />
    </>
  );
}
