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
        <h1>Registro</h1>
        <div class="inputs">
          <label for="name" class="estiloLabel"> Nombres </label>
          <q-input outlined v-model="user.name" />
        </div>
        <div class="inputs">
          <label for="email" class="estiloLabel"> Usuario </label>
          <q-input outlined v-model="user.email" />
        </div>
        <div class="inputs">
          <label for="password" class="estiloLabel"> Contraseña </label>
          <q-input outlined v-model="user.password" type="password"/>
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
    };
  },
  methods: {
    register() {
      //this.user.password = this.encryptPassword(this.user.password);
      Axios.post("http://localhost:3000/registry/", this.user)
        .then((res) => {
          console.log(res.code);
          console.log(res);
          if (res.data.code == 100) {
            this.$router.push({ name: "login" });
          } else {
            console.log("registro incorrecto", res);
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
  width: 35%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.estiloImagen {
  margin-top: 35px;
  margin-bottom: 20px;
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
</style>