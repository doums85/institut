/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'reviews',
  title: 'Avis',
  type: 'document',
  fields: [
    {
      name: 'review',
      type: 'array',
      of: [
        {
          name: 'reviewItem',
          title: 'Avis client',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nom & prénom',
              type: 'string',
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string',
              description: '(jour-mois-année) exple: 05-12-2021'
            },
            {
              name: 'commentaire',
              title: 'Commentaire',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};
