import counter from './counter';
//import post from './post';
//import user from './user';
import graphql_types from './graphql_types';
import './debug';

import Feature from './connector';

export default new Feature(counter, graphql_types);
