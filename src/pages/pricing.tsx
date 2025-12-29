import type {ReactNode} from 'react';
import {useEffect} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pricing.module.css';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Lifetime License',
    description: 'One-time purchase for the current major version — use it forever',
  },
  {
    title: 'Skills Assessments',
    description: 'Structured skills calibration and tracking for your team',
  },
  {
    title: 'Feedback Management',
    description: 'Track and synthesize feedback across review cycles',
  },
  {
    title: 'Performance Reports',
    description: 'Generate exportable, executive-ready performance summaries',
  },
  {
    title: 'Review Workflows',
    description: 'Streamlined processes for performance and calibration cycles',
  },
  {
    title: 'Local Data Storage',
    description: 'Your data stays on your machine — no cloud lock-in',
  },
  {
    title: 'Free Updates',
    description: 'All minor updates and improvements to this version included',
  },
  {
    title: 'Career Conversations',
    description: 'Tools for promotion packets and growth discussions',
  },
];

interface AudienceItem {
  text: string;
}

const audienceItems: AudienceItem[] = [
  {text: 'Manage engineers or technical teams'},
  {text: 'Run performance reviews or calibration cycles'},
  {text: 'Want clearer, more defensible feedback'},
  {text: 'Care about showing up prepared and credible with leadership'},
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is this per user or per machine?',
    answer: 'The license is for individual use. If you\'re a coach or consultant working with multiple clients, reach out — expanded licensing options may be available.',
  },
  {
    question: 'Can I expense this?',
    answer: 'Yes. Most customers expense this as a professional development or productivity tool.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'If you run into issues getting started or the product isn\'t what you expected, reach out. I want this to be a tool you\'re confident using.',
  },
];

function LemonSqueezyButton(): ReactNode {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const existingScript = document.querySelector('script[src*="lemon.js"]');

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.lemonsqueezy.com/lemon.js';
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <a
      href="https://shop.manager-dash.com/checkout/buy/ec1d8a03-b6d4-46e6-a50a-e0bc2b2d6013?embed=1"
      className={`lemonsqueezy-button ${styles.purchaseButton}`}
    >
      Purchase License — $249
    </a>
  );
}

function HeroSection(): ReactNode {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.pageTitle}>
            Pricing
          </Heading>
          <p className={styles.heroSubtitle}>
            Simple, transparent pricing for serious managers
          </p>
          <div className={styles.priceDisplay}>
            <span className={styles.priceAmount}>$249</span>
            <span className={styles.priceDescription}>one-time license</span>
          </div>
          <p className={styles.heroDescription}>
            No subscriptions. No auto-renewals. No surprise charges.
          </p>
          <div className={styles.heroButtonWrapper}>
            <LemonSqueezyButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsIncludedSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          What's included
        </Heading>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoThisIsForSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Who this is for
        </Heading>
        <div className={styles.audienceCard}>
          <p className={styles.audienceIntro}>
            This product is a good fit if you:
          </p>
          <ul className={styles.audienceList}>
            {audienceItems.map((item, idx) => (
              <li key={idx} className={styles.audienceItem}>
                <span className={styles.checkmark}>✓</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhyOneTimePricingSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h3" className={styles.subsectionHeading}>
          Future updates & upgrades
        </Heading>
        <div className={styles.textContent}>
          <p className={styles.textParagraph}>
            Your license includes all updates within the current major version.
          </p>
          <p className={styles.textParagraph}>
            In the future, major versions or advanced add-ons (for example: team-wide features or coaching workflows) may be offered separately. You'll always know before anything changes.
          </p>
          <p className={styles.textHighlight}>
            No forced upgrades. No bait-and-switch.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          FAQ
        </Heading>
        <div className={styles.faqList}>
          {faqItems.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{item.question}</h3>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection(): ReactNode {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaHeading}>
            Ready to get started?
          </Heading>
          <p className={styles.ctaDescription}>
            Purchase a one-time license and start using the software immediately.
          </p>
          <div className={styles.ctaButtonWrapper}>
            <LemonSqueezyButton />
          </div>
          <p className={styles.ctaFooter}>
            Built by an engineering leader, for engineering leaders.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Pricing(): ReactNode {
  return (
    <Layout
      title="Pricing"
      description="ManagerDash pricing — $249 one-time license for engineering managers"
    >
      <div className={styles.pricingPage}>
        <HeroSection />
        <WhatsIncludedSection />
        <WhoThisIsForSection />
        <WhyOneTimePricingSection />
        <FAQSection />
        <CTASection />
      </div>
    </Layout>
  );
}
