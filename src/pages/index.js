import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Analytics from '../analytics';

export default function IndexPage() {
  return (
    <>
      <Seo title="Xavier Stouder - Portfolio" />
      <Analytics />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/*<ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />*/}
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="projects" heading="Projects and communities" />
        <ContactSection sectionId="github" heading="Get in touch!" />
      </Page>
      <a rel="me" style="display: none" href="https://tooting.ch/@xavier">Mastodon</a>
    </>
  );
}
