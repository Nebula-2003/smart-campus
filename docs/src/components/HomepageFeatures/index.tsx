import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'NFC-Based Attendance',
    Svg: require('@site/static/img/undraw_pay-with-credit-card_77g6.svg').default,
    description: (
      <>
        Students tap their NFC ID cards on a scanner to mark attendance securely and instantly — no manual input or QR hassle.
      </>
    ),
  },
  {
    title: 'Interactive Calendar',
    Svg: require('@site/static/img/undraw_calendar_76t8.svg').default,
    description: (
      <>
        Keep track of events, lectures, and deadlines with an intuitive, color-coded calendar view.
      </>
    ),
  },
  {
    title: 'Smart Notifications',
    Svg: require('@site/static/img/undraw_new-notifications_wvqc.svg').default,
    description: (
      <>
        Receive real-time updates about attendance, class changes, or assignments straight to your dashboard.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
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
