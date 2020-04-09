import React from 'react';
import { contentChef } from '../services/contentChefClient'
import { Card } from "../components/card";
import Layout from "../components/layout";
import Link from "next/link";

const Home = ({ topSites }) => (
  <Layout
    title={'ContentChef Top Sites'}
  >
    <div>
      <h1 className="title">
        Welcome to <a href="https://contentchef.io">ContentChef!</a> + <a href="https://nextjs.org">Next.js</a> tutorial
      </h1>
      <p className="description">
        Top Sites
      </p>
    </div>

    <div style={{ width: "80%" }}>
      {topSites.map((site, index) => (
        <Link
          key={`top-site-${index}`}
          href={'/top-site/[publicId]'}
          as={`/top-site/${site.publicId}`}
        >
          <a style={{ textDecoration: 'initial' }}>
            <Card
              key={`top-site-${index}`}
              image={contentChef.getImageUrl(site.payload.image)}
              title={site.payload.title}
              description={site.payload.description}
              url={site.payload.url}
            />
          </a>
        </Link>
      ))}
    </div>
  </Layout>
);

export async function getServerSideProps(context) {
  const result = await contentChef.searchContents();
  return {
    props: { topSites: result }
  }
}

export default Home
