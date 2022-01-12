/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'prestation',
  title: 'Prestations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'introduction',
      title: 'Présentation des cours',
      type: 'text',
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [{ type: 'course' }],
    },
    {
      name: 'pricings',
      title: 'Formules',
      type: 'array',
      of: [{ type: 'pricing' }],
    },
    {
      name: 'sessions',
      title: 'Sessions',
      type: 'array',
      of: [{ type: 'session' }],
    },
    {
      name: 'sessionAvailable',
      title: 'Annonce Session disponible',
      type: 'object',
      fields: [
        {
          name: 'active',
          title: 'Activer la bannière d\'annonce',
          type: 'boolean',
          desciption: 'Pour activer la bannière'
        },
        {
          name: 'annonce',
          tittle: 'Message de l\'annonce',
          type: 'text',
          maxLength: 200,
          description: 'Ecrivez votre annonce de la session à venir ou en cours'
        }
      ]
    }
  ],
};
