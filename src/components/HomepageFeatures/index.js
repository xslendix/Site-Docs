import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn TempleOS Easily',
    Svg: require('@site/static/img/HolyC_Logo.svg').default,
    description: (
      <>
        Focus on what's important, get the fundamentals down, and start learning towards HolyC!
      </>
    ),
  },
  {
    title: 'Explore Endless Possibilities',
    Svg: require('@site/static/img/elephant.svg').default,
    description: (
      <>
        Explore all the cool features that await in TempleOS. Over all, proving to be a valuable learning experience.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/terry.svg').default,
    description: (
      <>
        This site is open-source; written by enthusiasts for enthusiasts. Want to suggest a change? head to our <a href="https://github.com/templeos-simplified/site-docs">GitHub</a> repository.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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

