import React from 'react';
import Layout from "../../components/layout";
import {contentChef} from "../../services/contentChefClient";

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

const TopSite = ({ topSite, cloudName }) => {
  return (
    <Layout
      title={`${topSite.title} Site`}
    >
      {!topSite
        ? <div>No Content Found</div>
        : <>
          <div>
            <h1 className="title">
              Welcome to <a href="https://contentchef.io">ContentChef!</a> + <a href="https://nextjs.org">Next.js</a> tutorial
            </h1>
            <p className="description">
              One of the best site
            </p>
          </div>
          <div style={SiteWrapper}>
            <img
              className={ImageWrapper}
              src={contentChef.getImageUrl(topSite.image, cloudName)}
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

export async function getServerSideProps(context) {
  const { params } = context;
  const result = await contentChef.getContent(params.publicId);
  return {
    props: {
      topSite: result.payload,
      cloudName: result.requestContext.cloudName
    }
  }
}

export default TopSite;
