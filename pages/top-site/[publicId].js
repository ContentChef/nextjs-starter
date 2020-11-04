import React from 'react';
import { TopSite } from '../../components/top-site';
import {contentChef} from "../../services/contentChefClient";


export async function getServerSideProps(context) {
  const { params } = context;
  const result = await contentChef.getContent(params.publicId);

  if (!result) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      renderType: 'Request time rendered',
      topSite: result.payload,
      publicId: result.publicId,
      cloudName: result.requestContext.cloudName
    }
  }
}

export default TopSite;
