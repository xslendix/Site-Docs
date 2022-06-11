import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src="https://media.discordapp.net/attachments/965800987870769152/982605253381861416/Logo128x152.jpg"></img>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`TempleOS Simplified`}
      description="Learn the beuaty of TempleOS">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
  
      </main>
      
    </Layout>
    
  );
}
