/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'faqs',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'faq',
      type: 'array',
      of: [
        {
          name: 'faqItem',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Réponse',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],

};
