import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import Analytics from '../analytics';

export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
      <Analytics />
      <Page>
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}
