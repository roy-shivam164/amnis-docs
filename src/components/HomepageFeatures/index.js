import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Marketing Campaigns",
    Svg: require("@site/static/img/svg1.svg").default,
    description: (
      <>
        Effective marketing campaigns are the heartbeat of brand success,
        capturing hearts and wallets with compelling storytelling.
      </>
    ),
  },
  {
    title: "Customer Journey",
    Svg: require("@site/static/img/svg2.svg").default,
    description: (
      <>
        In every campaign, the customer journey is the compass that guides us
        toward delivering the right message, at the right time, and in the right
        way.
      </>
    ),
  },
  {
    title: "E-mail Campaigns",
    Svg: require("@site/static/img/svg3.svg").default,
    description: (
      <>
        E-mail campaigns are a powerful tool for reaching your audience directly
        and delivering targeted messages that drive engagement.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className="just">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
