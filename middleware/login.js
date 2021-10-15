export default function ({app,store,redirect}) {
        if(store.getters['auth/authToken']){
            return redirect('/');
        }
        else{
            console.log("No authenticated");
        }
  }