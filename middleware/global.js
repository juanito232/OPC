export default ({ app }) => {
   if(app.$cookies.get('OPC-Auth-Token')){
       if(!app.store.state.auth.authToken){
            app.store.commit("auth/setAuthToken", { authToken:  app.$cookies.get('OPC-Auth-Token') });
            // app.store.state.auth.authToken = app.$cookies.get('OPC-Auth-Token');
       }
   }
  }