export default function ({store,redirect}) {
    // Add the userAgent property to the context
    if(process.client){
        if(true){
            return redirect('/login');
        }
    }
  }