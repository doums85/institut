/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'about',
  title: 'À propos',
  type: 'document',
  fields: [
    {
      name: 'presentation',
      title: 'Présentation',
      type: 'slider',
    },
    {
      name: 'advance',
      title: 'Listes des avantages / Services',
      type: 'array',
      of: [{ name: 'item', type: 'string' }],
    },
  ],
};
