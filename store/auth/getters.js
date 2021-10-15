export default {
  authToken(state) {
    if (state.authToken) {
      return state.authToken;
    } /*else if (localStorage.getItem("OPC-Auth-Token")) {
      return localStorage.getItem("OPC-Auth-Token");
    }*/
    else{
        return null;
    }
  }
};
