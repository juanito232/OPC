<template>
<q-layout
    style="background: linear-gradient(90deg, rgba(37,37,37,1) 0%, rgba(100,223,223,0.6292892156862745) 100%, rgba(105,48,195,0.5032387955182073) 100%);"
  >
    <img
      src="https://icon-library.com/images/accounting-icon/accounting-icon-1.jpg"
      alt=""
    />
    <div class="form">
      <q-form action="" @submit.prevent="login">
        <h1>Login</h1>
        <div class="inputs">
          <label for="email" class="estiloLabel"> Usuario </label>
          <q-input outlined v-model="user.email" bg-color="grey-1"/>
        </div>
        <div class="inputs">
          <label for="password" class="estiloLabel"> Contraseña </label>
          <q-input outlined v-model="user.password" bg-color="grey-1"/>
        </div>
        <q-btn type="submit" class="btn-registrar" label="Iniciar sesión" />
        <div>
          <a href="#" @click="redireccionRegistro"> Registrarse </a>
        </div>
      </q-form>
    </div>
</q-layout>
</template>

<script>
import JsSHA from "jssha";
import Axios from "axios";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      //this.user.password = this.encryptPassword(this.user.password);
      Axios.post("http://localhost:3000/login/",this.user).then(res=>{
        console.log(res.code);
        console.log(res);
          if (res.data.code == 100){
              this.$router.push({ name: 'home' })
          }else{
            console.log("usuario incorrecto",res);
            //this.notify('negative', "Usuario y/o contraseña no válidos", 'top')
          }
      }).catch((err)=>{
        console.log("Error",err);
            //this.notify('negative', "Error, inténtelo de nuevo más tarde", 'top')
      })
    },
    encryptPassword(password) {
      const shaObjt = new JsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
      shaObjt.update(password);
      const hash = shaObjt.getHash("HEX");
      return hash;
    },
    redireccionRegistro(){
      this.$router.push({name: 'registro'})
    }
    /*notify (type, message, position) {
      this.$q.notify({
        type,
        message,
        position
      })
    },*/
  },
  
};
</script>

<style scoped>
img {
  width: 12em;
  height: 12em;
}
.form {
  padding-top: 5em;
}
form div {
  padding-top: 2em;
}
button {
  margin-top: 2em;
}
.inputs {
  width: 18%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.btn-registrar {
  background-color: #6930c3;
  color: #ffffff;
}
.estiloLabel {
  color: #fefefe;
  font-size: 19px;
  font-weight: bold;
}
</style>