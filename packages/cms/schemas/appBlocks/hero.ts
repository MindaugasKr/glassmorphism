import { ObjectField } from '../../types';

export const hero: ObjectField<any> = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'ctaList',
      type: 'array',
      of: [{ type: 'cta' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare(selection) {
      const { title, description } = selection;
      return {
        title: `${title} ${description}`,
        subtitle: 'hero',
      };
    },
  },
};
