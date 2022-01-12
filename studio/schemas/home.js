/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'home',
  title: 'Accueil',
  type: 'document',
  fields: [
    {
      name: 'seo',
      title: 'SEO: Métadescription',
      type: 'text',
      maxLenght: 300,
    },
    {
      name: 'slide',
      title: "Informations Slider",
      type: 'slider',
    },
  ],

};
