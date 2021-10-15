<template>
  <q-layout
    style="background: #  "
  >
    <img class="estiloImagen" src="@/assets/logoCerdito2.png" alt="" />
    <div class="form">
      <q-form action="" @submit.prevent="login">
        <h1 class="estiloTitulo">OPC</h1>
        <div class="inputs">
          <label for="email" class="estiloLabel"> Correo electrónico </label>
          <q-input
            outlined
            v-model="user.email"
            bg-color="grey-1"
            lazy-rules
            :rules="[(val) => emailValidation(val) || 'Correo inválido.']"
          />
        </div>
        <div class="inputs">
          <label for="password" class="estiloLabel"> Contraseña </label>
          <q-input
            outlined
            v-model="user.password"
            bg-color="grey-1"
            type="password"
            lazy-rules
            :rules="[
              (val) =>
                mayusPasswordValidation(val) ||
                'La contraseña debe tener al menos una mayúscula.',
              (val) =>
                numPasswordValidation(val) ||
                'La contraseña debe tener al menos un número.',
              (val) =>
                lengthPasswordValidation(val) ||
                'La contraseña debe tener mínimo 6 caracteres.',
            ]"
          />
        </div>
        <div>
          <a
            href="#"
            class="estiloLink"
            @click="redireccionLostPassword"
          >
            ¿Olvidó su contraseña?
          </a>
        </div>
        <div>
          <q-btn type="submit" class="estiloButton" outline label="Iniciar sesión" />
          <q-btn
            type="submit"
            class="estiloButton2"
            label="Registrarse"
            outline
            @click="redireccionRegistro"
          />
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
        id: 0,
        email: null,
        password: null,
      },
    };
  },
  beforeMount(){
    if(localStorage.getItem('user')){
            window.location.href = 'http://localhost:8080/OPC/';
            return;
        }
      
  },
  methods: {
    login() {
      //this.user.password = this.encryptPassword(this.user.password);
      Axios.post("http://localhost:3000/login/", this.user)
        .then((res) => {
          console.log(res.code);
          console.log(res);
          if (res.data.code == 100) {
            localStorage.setItem("user", JSON.stringify({ id: res.data.data.id }));
            this.$router.push({ name: "Home-Content" });
          } else {
            console.log("usuario incorrecto", res);
            //this.notify('negative', "Usuario y/o contraseña no válidos", 'top')
          }
        })
        .catch((err) => {
          console.log("Error", err);
          //this.notify('negative', "Error, inténtelo de nuevo más tarde", 'top')
        });
    },
    encryptPassword(password) {
      const shaObjt = new JsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
      shaObjt.update(password);
      const hash = shaObjt.getHash("HEX");
      return hash;
    },
    redireccionRegistro() {
      this.$router.push({ name: "registro" });
    },
    redireccionLostPassword() {
      this.$router.push({ name: "lostPassword" });
    },
    numPasswordValidation(password) {
      const numPattern = /[0-9]/;
      return numPattern.test(password);
    },
    lengthPasswordValidation(password) {
      const lengthPattern = /.{6,}/;
      return lengthPattern.test(password);
    },
    mayusPasswordValidation(password) {
      const mayusPattern = /[A-Z]/;
      return mayusPattern.test(password);
    },
    emailValidation(email) {
      const emailPattern = /[a-z0-9]+(.[_a-z0-9]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,15})/i;
      return emailPattern.test(email);
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
  background-color: #fefefe;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 20px;
}
form div {
  padding-top: 2em;
}
button {
  margin-top: 2em;
}
.inputs {
  margin: 0 auto;
  width: 30%;
  text-align: start;
}
.estiloButton {
  background-color: #6EC267;
  color: #6EC267;
  margin: 5px;
  margin-bottom: 2.5%;
  box-shadow: 0px 0px 0px #5fa559;
}
.estiloButton2 {
  background-color: #6EC267;
  color: #6930c3;
  margin: 5px;
  margin-bottom: 2.5%;
  box-shadow: 0px 0px px grey;
}
.estiloLabel {
  color: #000;
  font-size: 19px;
  font-weight: bold;
  margin-right: 10px;
}
.estiloTitulo {
  margin: 0 auto;
  font-size: 65px;
  color:#6EC267;
  font-weight: bold;
}
.estiloLink {
  font-size: 17px;
  text-decoration: none;
}
.estiloImagen {
  margin-top: 35px;
  margin-bottom: 20px;
}
</style>
