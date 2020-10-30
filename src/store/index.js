import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

import state     from './modules/state/';
import mutations from './modules/mutations/';
import actions   from './modules/actions/';
import modules   from './modules/modules/';

const store = new Vuex.Store( {
    state,
    mutations,
    actions,
    modules,
} );

export default store;
