/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'course',
  title: 'Cours',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'chapters',
      title: 'Chapitre',
      type: 'array',
      of: [{ type: 'chapter' }],
    },
  ],
};

