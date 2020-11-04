import React from 'react';
import { TopSite } from '../../components/top-site';
import {contentChef} from "../../services/contentChefClient";


export async function getStaticPaths() {
  const sites = await contentChef.searchTopSitesContents();
  const publicIds = sites.map(site => site.publicId);
  const paths = publicIds.map(publicId =>{
    return {params:{ publicId:publicId } }
  });
  return {
    paths:paths,
    fallback: false 
  };
}

export async function getStaticProps({ params }) {  
  const result = await contentChef.getContent(params.publicId);
  return {
    props: {
      renderType: 'Full static',
      topSite: result.payload,
      publicId: result.publicId,
      cloudName: result.requestContext.cloudName
    }
  }
}

export default TopSite;
