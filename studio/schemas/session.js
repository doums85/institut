/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'session',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Nom de la formule',
      type: 'string',
    },
    {
      name: 'contenu',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'item',
              title: 'Nom',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Valeur',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'condition',
      title: "Conditions d'acces",
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
