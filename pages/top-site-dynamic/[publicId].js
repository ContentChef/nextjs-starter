import React from 'react';
import { TopSite } from '../../components/top-site';
import {contentChef} from "../../services/contentChefClient";


export async function getStaticPaths() {
  const sites = await contentChef.searchTopSitesContents(['aws-site', 'content-chef-site']);
  const publicIds = sites.map(site => site.publicId);
  const paths = publicIds.map(publicId =>{
    return {params:{ publicId:publicId } }
  });
  return {
    paths: paths,
    fallback: true 
  };
}

export async function getStaticProps({ params }) {  
  const result = await contentChef.getContent(params.publicId);

  if (!result) {
    return {
      notFound: true
    }
  }

  return {
    revalidate: 60,
    props: {
      renderType: 'Dynamic not blocking',
      topSite: result.payload,
      publicId: result.publicId,
      cloudName: result.requestContext.cloudName
    }
  }
}

export default TopSite;
