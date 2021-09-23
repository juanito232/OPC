<template>
<q-layout
    style="background: linear-gradient(90deg, rgba(144,111,195,1) 0%, rgba(100,223,223,0.6292892156862745) 100%, rgba(105,48,195,0.5032387955182073) 100%);">
    <img class="estiloImagen"
      src="@/assets/logoCerdito2.png"
      alt=""
    />
    <div class="form">
      <q-form action="" @submit.prevent="login">
        <h1 class="estiloTitulo">Ingrese su nueva contraseña</h1>
        <div class="inputs">
          <label for="password" class="estiloLabel"> Contraseña </label>
          <q-input outlined v-model="user.password" lazy-rules :rules="[val=>mayusPasswordValidation(val) || 'La contraseña debe tener al menos una mayúscula.', 
            val=>numPasswordValidation(val) || 'La contraseña debe tener al menos un número.', val=>lengthPasswordValidation(val) || 'La contraseña debe tener mínimo 6 caracteres.' ]" type="password"/>
        </div>
        <div class="inputs">
          <label for="confirmPass" class="estiloLabel"> Confirmar contraseña </label>
          <q-input outlined v-model="confirmPass" lazy-rules :rules="[val=>confirmPassword(val) || 'Las contraseñas no coinciden.']" type="password"/>
        </div>
        <div>
          <q-btn type="submit" class="estiloButton" label="Enviar" @click="redireccionLogin"/>
        </div>
      </q-form>
    </div>
</q-layout>
</template>

<script>
export default {
  name: "requestPassword",
  data() {
    return {
      user: {
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
    redireccionLogin(){
      this.$router.push({name: 'login'})
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
  background-color: #6930c3;
  color: #ffffff;
  margin: 5px;
  margin-bottom: 2.5%;
  box-shadow: 1px 1px 1px grey;
}
.estiloLabel {
  color: #595959;
  font-size: 19px;
  font-weight: bold;
  margin-right: 10px;
}
.estiloTitulo {
  margin: 0 auto;
  font-size: 65px;
}
.estiloImagen {
  margin-top: 35px;
  margin-bottom: 20px;
}
</style>