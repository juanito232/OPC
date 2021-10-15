export default ({ app }) => {
   if(app.$cookies.get('OPC-Auth-Token')){
       if(!app.store.state.auth.authToken){
            app.store.state.auth.authToken = app.$cookies.get('OPC-Auth-Token');
       }
   }
  }