import Axios from 'axios';

export default {
  async login(context,payload) {
    try {
      const response = await Axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6toY5XdIsTpA4pl6YcJZn6pTEp0jJKPs",
        payload.data
      );
      if (response.status>=200 && response.status<300) {
        if (process.client) {
            //  context.commit("setAuthToken", { authToken: response.data.authToken });         
            //  this.$cookies.set("OPC-Auth-Token",response.data.authToken);   
             const uuid = await Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB6toY5XdIsTpA4pl6YcJZn6pTEp0jJKPs',{
              idToken:response.data.idToken
             });
             if(uuid.data.users[0].localId){
              this.$cookies.set("OPC-Auth-Token",response.data.idToken);
              this.$cookies.set("uuid",uuid.data.users[0].localId);
              context.commit("auth/setAuthToken", { authToken: response.data.email });         
             }
        }
      } else {
        console.log("usuario incorrecto", response);
      }
    } catch (e) {
       throw e;
    }
  },

  logout(context) {
    try {
      context.commit("setAuthToken",{authToken:null});         
      this.$cookies.set("OPC-Auth-Token",null);   
      this.$cookies.set("uuid",null);
    } catch (e) {
       throw e;
    }
  }
};
