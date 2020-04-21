// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import author from './author';
import landing from './landing';
import PbDefaults, { colorsFields } from './pb-defaults';
import PbHeader from './pb-header';
import PbCards, { card } from './pb-cards';
// console.log('Landings:', Landings)

export default createSchema({

  // We name our schema
  name: 'Landinds',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    landing,
    PbDefaults,
    colorsFields,
    PbHeader,
    PbCards,
    card
  ])
});