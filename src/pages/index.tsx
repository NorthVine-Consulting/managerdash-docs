import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          The Performance Management Tool for Engineering Managers
        </Heading>
        <p className={styles.heroSubtitle}>
          Stop scrambling for evidence at review time. Track feedback, skills,
          and contributions year-round—so you can show up to every review
          prepared, credible, and confident.
        </p>
        <p className={styles.trialInfo}>
          Free 7-day trial • $249 one-time license
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/downloads">
            Download Free Trial
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/getting-started">
            See How It Works
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProblemSection(): ReactNode {
  const problems = [
    {
      title: 'Scattered Data',
      description:
        "Notes in Slack, PRs in GitHub, feedback in email. When review time comes, you're piecing together months of work from memory.",
    },
    {
      title: 'Lack of Evidence',
      description:
        "\"They're doing great\" isn't enough for calibration. Leadership wants data, patterns, and specific examples.",
    },
    {
      title: 'Lost Context',
      description:
        "What seemed important in March is forgotten by December. Without tracking, you're vulnerable to recency bias.",
    },
  ];

  return (
    <section className={styles.problemSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          The Challenge Every Engineering Manager Faces
        </Heading>
        <div className={styles.problemGrid}>
          {problems.map((problem, idx) => (
            <div key={idx} className={styles.problemCard}>
              <Heading as="h3" className={styles.problemTitle}>
                {problem.title}
              </Heading>
              <p className={styles.problemDescription}>{problem.description}</p>
            </div>
          ))}
        </div>
        <p className={styles.problemTransition}>
          ManagerDash solves this by putting all your management data in one
          place—privately, securely, on your machine.
        </p>
      </div>
    </section>
  );
}

function WhoThisIsForSection(): ReactNode {
  const criteria = [
    'Run performance reviews or calibration cycles',
    'Manage engineers or technical teams',
    'Want defensible, evidence-based feedback',
    'Care about showing up prepared with leadership',
    'Value privacy and data ownership',
    'Prefer to buy software once, not rent forever',
  ];

  return (
    <section className={styles.whoSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Built for Engineering Managers Who Care About Getting It Right
        </Heading>
        <div className={styles.whoCard}>
          <p className={styles.whoIntro}>You'll love ManagerDash if you:</p>
          <ul className={styles.whoList}>
            {criteria.map((item, idx) => (
              <li key={idx} className={styles.whoItem}>
                <span className={styles.checkmark}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={styles.whoQuote}>
            "If you've ever felt caught off-guard in a calibration meeting
            because you couldn't remember specific examples from 6 months ago,
            this is for you."
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection(): ReactNode {
  const trustElements = [
    'One-time purchase, lifetime license - no subscriptions',
    'Your data never leaves your machine',
    'macOS native app built with care',
    'Free updates for the current major version',
  ];

  return (
    <section className={styles.socialSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Built by an Engineering Leader, for Engineering Leaders
        </Heading>
        <div className={styles.trustGrid}>
          {trustElements.map((element, idx) => (
            <div key={idx} className={styles.trustCard}>
              <span className={styles.checkmark}>✓</span>
              <span>{element}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection(): ReactNode {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaHeading}>
            Ready to Stop Scrambling at Review Time?
          </Heading>
          <p className={styles.ctaSubheading}>
            Start with a free 7-day trial. One-time purchase. Your data stays
            yours.
          </p>
          <div className={styles.priceDisplay}>
            <span className={styles.priceAmount}>$249</span>
            <span className={styles.priceDescription}>one-time license</span>
          </div>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/downloads">
              Download Free Trial
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/pricing">
              View Pricing Details
            </Link>
          </div>
          <p className={styles.ctaFooter}>
            Built for serious managers. Most customers expense this as
            professional development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Performance Management Tool for Engineering Managers. Stop scrambling for evidence at review time.">
      <HomepageHeader />
      <main>
        <ProblemSection />
        <HomepageFeatures />
        <WhoThisIsForSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
    </Layout>
  );
}
