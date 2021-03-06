import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import Analytics from '../analytics';

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Analytics />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}
