import React from 'react';
import PrimaryLayout from '@/layouts/PrimaryLayout';
import { graphql, useStaticQuery } from 'gatsby';
import PageBuilder from '@/baseBlocks/PageBuilder';
import { BlockDataList } from '@/types';

type HomePageData = {
  homePage: {
    _rawPageBuilder: BlockDataList;
  };
};

const homepageQuery = graphql`
  query {
    homePage: sanityHomePage {
      _rawPageBuilder
    }
  }
`;

const HomePage = () => {
  const { homePage } = useStaticQuery<HomePageData>(homepageQuery);

  const { _rawPageBuilder: blockData } = homePage;

  return (
    <PrimaryLayout>
      <PageBuilder blockDataList={blockData} />
    </PrimaryLayout>
  );
};

export default HomePage;
