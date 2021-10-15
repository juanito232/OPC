export default function ({app,store,redirect}) {
        if(!store.getters['auth/authToken']){
            return redirect('/login');
        }
        else{
            console.log("authenticated");
        }
  }