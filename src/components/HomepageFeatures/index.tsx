import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "PR Feedback",
    Svg: require("@site/static/img/merge.svg").default,
    description: (
      <>
        Fetch PRs directly from GitHub, analyze contributions as you review them,
        and generate on-the-spot feedback from code reviews. Never lose track of
        technical wins.
      </>
    ),
  },
  {
    title: "Skills Tracking That Works",
    Svg: require("@site/static/img/skills.svg").default,
    description: (
      <>
        Customizable competencies and career ladders. Track growth over
        quarters, not just year-end. See patterns across your whole team with
        defensible, evidence-based assessments.
      </>
    ),
  },
  {
    title: "Feedback When It Happens",
    Svg: require("@site/static/img/feedback.svg").default,
    description: (
      <>
        Capture observations immediately. Review pending feedback before 1-on-1s and build a complete narrative
        over time.
      </>
    ),
  },
  {
    title: "Your Data Stays Yours",
    Svg: require("@site/static/img/consolidation.svg").default,
    description: (
      <>
        Local-first: everything on your machine. No cloud uploads, no
        subscriptions. Export to markdown anytime. You own your data forever.
      </>
    ),
  },
  {
    title: "Reports in Minutes, Not Hours",
    Svg: require("@site/static/img/report.svg").default,
    description: (
      <>
        Generate comprehensive performance reviews, pull in PRs, feedback,
        skills, and goals. Export to markdown for HR systems. Spend time
        discussing, not documenting.
      </>
    ),
  },
  {
    title: "Credibility with Leadership",
    Svg: require("@site/static/img/focus.svg").default,
    description: (
      <>
        Show patterns, not opinions. Data-backed promotion cases with a clear
        audit trail. Defend your decisions with evidence and show up to every
        calibration with confidence.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
