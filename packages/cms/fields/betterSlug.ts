import SlugInput from 'sanity-plugin-better-slug';

import { BASE_PATH } from '../constants/url';
import { slugify } from '../util/slugify';
import { BetterSlugField } from '../types';

type BetterSlug = (props?: {
  name?: string;
  description?: string;
  options?: BetterSlugField['options'];
}) => BetterSlugField;

export const betterSlug: BetterSlug = (props = {}) => {
  const { name = 'slug', description, options = {} } = props;

  return {
    name,
    type: 'better-slug',
    inputComponent: SlugInput,
    description,
    options: {
      source: 'title',
      basePath: `${BASE_PATH}`,
      slugify,
      ...options,
    },
  };
};
