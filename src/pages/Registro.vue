<template>
<q-layout
    style="background: linear-gradient(90deg, rgba(144,111,195,1) 0%, rgba(100,223,223,0.6292892156862745) 100%, rgba(105,48,195,0.5032387955182073) 100%);"
  >
   <img class="estiloImagen"
      src="@/assets/logoCerdito2.png"
      alt=""
    />
    <div class="form">
      <q-form action="" @submit.prevent="register">
        <h1 class="estiloTitulo">Registro</h1>
        <div class="inputs">
          <label for="name" class="estiloLabel"> Nombre </label>
          <q-input outlined v-model="user.name" lazy-rules :rules="[val =>(val && val.length > 1) || 'Por favor escriba su nombre.']"/>
        </div>
        <div class="inputs">
          <label for="email" class="estiloLabel"> Correo electrónico </label>
          <q-input outlined v-model="user.email" lazy-rules :rules="[val=>emailValidation(val) || 'Correo inválido.']" />
        </div>
        <div class="inputs">
          <label for="password" class="estiloLabel"> Contraseña </label>
          <q-input outlined v-model="user.password" lazy-rules :rules="[val=>mayusPasswordValidation(val) || 'La contraseña debe tener al menos una mayúscula.', 
            val=>numPasswordValidation(val) || 'La contraseña debe tener al menos un número.', val=>lengthPasswordValidation(val) || 'La contraseña debe tener mínimo 6 caracteres.' ]" type="password"/>
        </div>
        <div class="inputs">
          <label for="password" class="estiloLabel"> Confirmar contraseña </label>
          <q-input outlined v-model="confirmPass" lazy-rules :rules="[val=>confirmPassword(val) || 'Las contraseñas no coinciden.']" type="password"/>
        </div>
        <q-btn type="submit" class="estiloButton" label="Registrarse" />
      </q-form>
    </div>
</q-layout>
</template>

<script>
import Axios from "axios";
export default {
  name: "registro",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      confirmPass: "",
    };
  },
  methods: {
    numPasswordValidation(password) {
      const numPattern = /[0-9]/
      return numPattern.test(password)
    },
    lengthPasswordValidation(password) {
      const lengthPattern = /.{6,}/
      return lengthPattern.test(password)
    },
    mayusPasswordValidation(password) {
      const mayusPattern = /[A-Z]/
      return mayusPattern.test(password)
    },
    confirmPassword(password) {
      return this.user.password.toString() === password.toString()
    },
    emailValidation(email) {
      const emailPattern = /[a-z0-9]+(.[_a-z0-9]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,15})/i
      return emailPattern.test(email)
    },
    register() {
      //this.user.password = this.encryptPassword(this.user.password);
      Axios.post("http://localhost:3000/registry/", this.user)
        .then((res) => {
          console.log(res.code);
          console.log(res);
          if (res.data.code == 100) {
            this.$router.push({ name: "login" });
          } else {
            console.log("Registro incorrecto", res);
            //this.notify('negative', "Usuario y/o contraseña no válidos", 'top')
          }
        })
        .catch((err) => {
          console.log("Error", err);
          //this.notify('negative', "Error, inténtelo de nuevo más tarde", 'top')
        });
    },
  },
};
</script>

<style scoped>
img {
  width: 12em;
  height: 12em;
}
.form {
  padding-top: 2px;
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
.estiloImagen {
  margin-top: 30px;
  margin-bottom: 20px;
}
.estiloButton {
  background-color: #6930c3;
  color: #ffffff;
  margin: 5px;
  margin-bottom: 3.5%;
  box-shadow: 1px 1px 1px grey;
  margin-top: 30px;
}
.estiloLabel {
  width: 30%;
  color: #595959;
  font-size: 19px;
  font-weight: bold;
  margin-right: 10px;
}
.estiloTitulo {
  margin: 0 auto;
  font-size: 65px;
}
</style>