import Axios from 'axios';

export default {
  async login(context,payload) {
    try {
      const response = await Axios.post(
        "http://localhost:3000/login/",
        payload.data
      );
      if (response.data.code == 100) {
        if (process.client) {
             context.commit("setAuthToken", { authToken: response.data.authToken });         
             this.$cookies.set("OPC-Auth-Token",response.data.authToken);   
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
    } catch (e) {
       throw e;
    }
  }
};
