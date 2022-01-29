import React, { VFC } from 'react';

import Hero from '@/cmsBlocks/Hero';
import { BlockData } from '@/types/blockDataList.type';

import { PageBuilderProps } from './PageBuilder.types.ts';

const getBlocks = (blockData: BlockData) => {
  switch (blockData._type) {
    case 'hero': {
      return <Hero key={blockData._key} {...blockData} />;
    }
  }
};

const PageBuilder: VFC<PageBuilderProps> = ({ blockDataList }) => {
  const className = 'page-builder';

  return (
    <div className={className}>
      {blockDataList.map((blockData) => getBlocks(blockData))}
    </div>
  );
};

export default PageBuilder;
