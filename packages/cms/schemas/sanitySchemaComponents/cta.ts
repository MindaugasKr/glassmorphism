import { ObjectField } from '../../types'

export const cta: ObjectField<any> = {
  name: 'cta',
  title: 'Cta',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'url',
      type: 'string',
    },
    {
      name: 'scrollToId',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
        subtitle: 'cta',
      }
    },
  },
}
