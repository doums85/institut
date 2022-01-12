/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'information',
  title: 'Informations Institut',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'mention',
      title: 'Mentions légales',
      type: 'text',
    },
    {
      name: 'cgv',
      title: 'Conditions générales de ventes',
      type: 'text',
    },
    {
      name: 'confidential',
      title: 'Politique de confidentialité',
      type: 'text',
    },
    {
      name: 'paiement',
      title: 'Image de paiement paypal',
      type: 'image',
    },
    {
      name: 'contact',
      title: 'Informations de contact',
      type: 'array',
      of: [
        {
          name: 'infos',
          type: 'object',
          fields: [
            {
              name: 'itemInfo',
              title: "Texte de l'info",
              type: 'string',
            },
            {
              name: 'valueInfo',
              title: 'Infos (tel, email)',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'avantage',
      title: 'Image responsive',
      type: 'image',
      description:
        'Image pour montrer que le site est disponible sur tous supports',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
};
