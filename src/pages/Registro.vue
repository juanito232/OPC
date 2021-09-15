<template>
  <div>
    <img
      src="https://icon-library.com/images/accounting-icon/accounting-icon-1.jpg"
      alt=""
    />
    <div class="form">
      <q-form action="" @submit.prevent="register">
        <h1>Registro</h1>
        <div class="inputs">
          <label for="name"> Nombres </label>
          <q-input outlined v-model="user.name" />
        </div>
        <div class="inputs">
          <label for="email"> Usuario </label>
          <q-input outlined v-model="user.email" />
        </div>
        <div class="inputs">
          <label for="password"> Contraseña </label>
          <q-input outlined v-model="user.password" />
        </div>
        <q-btn type="submit" class="btn-registrar" label="Registrarse" />
      </q-form>
    </div>
  </div>
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
}
form div {
  padding-top: 2em;
}
button {
  margin-top: 2em;
}
.inputs {
  width: 28%;
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