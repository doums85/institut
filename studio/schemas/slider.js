/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'slider',
  title: 'Informations Institut',
  type: 'object',
  fields: [
    {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'title',
        title: 'Titre',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text du Slider',
        type: 'text',
      },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};
