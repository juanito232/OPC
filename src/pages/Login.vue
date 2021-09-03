<template>
  <div>
    <img
      src="https://icon-library.com/images/accounting-icon/accounting-icon-1.jpg"
      alt=""
    />
    <div class="form">
      <q-form action="" @submit.prevent="login">
        <h1>Login</h1>
        <div class="inputs">
          <label for="email"> Usuario </label>
          <q-input outlined v-model="user.email" />
        </div>
        <div class="inputs">
          <label for="password"> Contraseña </label>
          <q-input outlined v-model="user.password" />
        </div>
        <q-btn type="submit" class="btn-registrar" label="Iniciar sesión" />
        <div>
          <a href="#"> Registrarse </a>
        </div>
      </q-form>
    </div>
  </div>
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
      Axios.post("localhost:3000/login",this.user).then(res=>{
          if (res.code && res.code == 100){
              this.$router.push({ name: 'Home' })
          }else{
            //this.notify('negative', "Usuario y/o contraseña no válidos", 'top')
          }
      }).catch(()=>{
            //this.notify('negative', "Error, inténtelo de nuevo más tarde", 'top')
      })
    },
    encryptPassword(password) {
      const shaObjt = new JsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
      shaObjt.update(password);
      const hash = shaObjt.getHash("HEX");
      return hash;
    },
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
  width: 35%;
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
</style>