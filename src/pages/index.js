import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Our Process',
    imageUrl: 'img/Process.svg',
    redirectUrl : 'docs/our-process/product-architecture',
    description: (
      <>
       Working with more than 150 software products, we have continuously improved the way we approach architecture. This section shares these practices, which will tailor-made for distributed/remote teams.
      </>
    ),
  },
  {
    title: 'Focus Areas',
    imageUrl: 'img/Focus.svg',
    redirectUrl : 'docs/focus-areas/web-application',
    description: (
      <>
        Modern architectural practices go well beyond the boundaries of quality attributes, code, and infrastructure. Today we talk about DX, DevOps, SecOps, Testability, Continous Quality &, etc.
      </>
    ),
  },
  {
    title: 'Case Studies',
    imageUrl: 'img/Demanding.svg',
    redirectUrl : 'docs/case-studies/design-system',
    description: (
      <>
        Different case studies, working with Design Systems, Microservices, Microfrontends, Serverless, Multi-Tenancy, Cloud Architecture.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, redirectUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link
          className={styles.featureCard}
          to={useBaseUrl(redirectUrl)}>
          <div className="cardNew">
            {imgUrl && (
              <div className="text--center">
                <img className={styles.featureImage} src={imgUrl} alt={title} />
              </div>
            )}
          <h3>{title}</h3>
          <p>{description}</p>
          </div>
      </Link>
    </div>
   
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container py-100 text-center text-primary">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
