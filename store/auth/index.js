import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  state(){
    return {authToken:null};
  },
  mutations,
  getters,
  actions
}