import {Document} from "../../types";

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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'If not happy with what the system generated, you can hand-edit it here',
    },
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
