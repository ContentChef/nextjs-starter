import { createUrl } from '@contentchef/contentchef-media';
import { useRouter } from 'next/router'
import React from 'react';
import Layout from "../../components/layout";
import { Links } from '../links';

const SiteWrapper = {
  textAlign: 'center'
};

const ImageWrapper = {
  height: 150,
  maxHeight: 150,
};

const SiteContentWrapper = {
  paddingTop: 20,
  textAlign: 'center'
};

const SiteTitle = {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: '2em'
};

const SiteDescription = {
  marginBottom: '1.5em'
}

export const TopSite = ({ topSite, publicId, renderType }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title={`Loading...`}>
        <div>Loading....</div>
      </Layout>   
    );
  }

  return (
    <Layout
      title={`${topSite.title} Site (${renderType})`}
    >      
      {!topSite
        ? <div>No Content Found</div>
        : <>
          <div>
            <Links publicId={publicId}/>
            <h1 className="title">
              Welcome to <a href="https://contentchef.io">ContentChef!</a> + <a href="https://nextjs.org">Next.js</a> tutorial
            </h1>            
            <p className="description">
              One of the best site <br/>
              The rendering was {renderType}
            </p>
          </div>
          <div style={SiteWrapper}>
            <img
              className={ImageWrapper}
              src={createUrl(topSite.image, { fetchFormat: 'auto', width: '1280' })}
              alt={`${topSite.title} image`}
            />
            <div style={SiteContentWrapper}>
              <div style={SiteTitle}>{topSite.title}</div>
              <div style={SiteDescription}>{topSite.description}</div>
              <div>{topSite.url}</div>
            </div>
          </div>
        </>
      }
    </Layout>
  )
};