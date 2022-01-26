import React, { VFC } from 'react';
import { BlockDataList } from '../../types';
import Hero from '../../cmsBlocks/Hero';
import { BlockData } from '../../types/blockDataList.type';

const getBlocks = (blockData: BlockData) => {
  switch (blockData._type) {
    case 'hero': {
      return <Hero key={blockData._key} {...blockData} />;
    }
  }
};

interface IPageBuilder {
  blockDataList: BlockDataList;
}

const PageBuilder: VFC<IPageBuilder> = ({ blockDataList }) => {
  const className = 'page-builder';

  return (
    <div className={className}>
      {blockDataList.map((blockData) => getBlocks(blockData))}
    </div>
  );
};

export default PageBuilder;
