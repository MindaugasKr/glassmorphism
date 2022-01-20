import {Document} from "../../types";
import {betterSlug} from "../../fields/betterSlug";

export const home: Document<any> = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
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
  ],
  preview: {
    select: {
      slug: 'slug',
      template: 'template',
      message: 'message',
    },
    prepare(selection) {
      const { slug, template, message } = selection;
      return {
        title: `${slug.current} [${template}]`,
        subtitle: message,
      };
    },
  },
};
