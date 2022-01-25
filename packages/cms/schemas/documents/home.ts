import { Document } from '../../types'
import { betterSlug } from '../../fields/betterSlug'
import { pageBuilder } from '../../fields/pageBuilder'

export const home: Document<any> = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    // TODO:
    //  remove unnecesary fields,
    //  add seo fields,
    {
      name: 'template',
      title: 'Template',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
    },
    betterSlug(),
    {
      name: 'message',
      title: 'Message',
      type: 'string',
    },
    pageBuilder(),
  ],
  preview: {
    select: {
      slug: 'slug',
      template: 'template',
      message: 'message',
    },
    prepare(selection) {
      const { slug, template, message } = selection
      return {
        title: `${slug.current} [${template}]`,
        subtitle: message,
      }
    },
  },
}
