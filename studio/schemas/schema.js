// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import home from './home';
import contact from './contact';
import prestations from './prestations';
import imageCarrousel from './imageCarrousel';
import assetItem from './assetItem';
import presentation from './presentation';
import information from './information';
import slider from './slider';
import about from './about';
import chapter from './chapter';
import cours from './cours';
import princing from './princing';
import session from './session';
import faq from './faq';
import review from './review';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    /* IMPORTER LES FICHIERS SCHEMAS */
    information,
    home,
    about,
    prestations,
    cours,
    chapter,
    princing,
    session,
    faq,
    review,
    contact,
    imageCarrousel,
    assetItem,
    presentation,
    slider,
  ]),
});
