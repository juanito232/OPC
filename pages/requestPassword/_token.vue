<template>
  <a-layout class="wrapper-login" style="background-color:white;">
    <div class="triangle-right"></div>
    <div class="triangle-left"></div>
    <div class="circle-right"></div>
    <div class="circle-left"></div>
    <div class="circle-top"></div>
    <div class="title"><img src="~/assets/opc_logo.png" alt="" /></div>
    <div class="form">
      <a-form-model
        ref="ruleForm"
        :rules="rules"
        :model="form"
        @submit="requestPassword"
        @submit.native.prevent
      >
        <span>Ingrese su nueva contraseña:</span>
        <pre></pre>
        <pre></pre>
        <a-form-model-item prop="password">
          <a-input
            v-model="form.password"
            placeholder="Contraseña"
            size="large"
            type="password"
          >
            <a-icon
              slot="prefix"
              type="password"
              style="color:rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="repetPassword">
          <a-input
            v-model="form.repetpassword"
            placeholder="Repetir Contraseña"
            size="large"
            type="password"
          >
            <a-icon
              slot="prefix"
              type="password"
              style="color:rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" html-type="submit">
            Enviar
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </a-layout>
</template>

<script>
import Axios from "axios";
export default {
  name: "requestPassword",
  data() {
    return {
      form: {
        password: ""
      },
      confirmPass: ""
    };
  },
  methods: {
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
    confirmPassword(password) {
      return this.user.password.toString() === password.toString();
    },
    redireccionLogin() {
      this.$router.push({ name: "login" });
    },
    requestPassword() {
      Axios.post("http://localhost:3000/changePassword", {
        token: this.$route.params.token,
        newPassword:this.form.password
      })
        .then(res => {
          console.log(res.code);
          console.log(res);
          if (res.data.code == 100) {
            this.$router.push({path:'/login'});
          } else {
            window.location.href = "/error";
            console.log("No se pudo actualizar", res);
            //this.notify('negative', "Usuario y/o contraseña no válidos", 'top')
          }
        })
        .catch(err => {
          //console.log("Error", err);
          window.location.href = "/error";
          //this.notify('negative', "Error, inténtelo de nuevo más tarde", 'top')
        });
    }
  },
  beforeMount() {
    Axios.post("http://localhost:3000/checkToken", {
      token: this.$route.params.token
    })
      .then(res => {
        console.log(res.code);
        console.log(res);
        if (res.data.code == 100) {
          console.log("token");
        } else {
          window.location.href = "/error";
          console.log("No se pudo actualizar", res);
          //this.notify('negative', "Usuario y/o contraseña no válidos", 'top')
        }
      })
      .catch(err => {
        console.log("Error", err);
        window.location.href = "/error";
        //this.notify('negative', "Error, inténtelo de nuevo más tarde", 'top')
      });
  }
};
</script>

<style scoped>
.wrapper-login {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.buttons {
  display: flex;
}

.buttons div {
  margin-right: 1em;
}

.title {
  vertical-align: middle;
  padding-bottom: 5em;
}
.title span {
  padding: 10px;
  font-size: 2em;
}
.title img {
  height: 130px;
}

.triangle-left {
  width: 151px;
  height: 151px;
  background-color: #6930c3;
  transform: rotate(-80deg);
  position: absolute;
  top: -86px;
  left: -30px;
  text-align: center;
}

.circle-right {
  width: 101px;
  height: 101px;
  background-color: #7cd9eb;
  border-radius: 200em;
  position: absolute;
  bottom: 10%;
  left: 10%;
  text-align: center;
}

.circle-left {
  width: 71px;
  height: 71px;
  background-color: #7cd9eb;
  border-radius: 200em;
  position: absolute;
  bottom: 30%;
  right: 30%;
  text-align: center;
}

.circle-top {
  width: 71px;
  height: 71px;
  background-color: #7cd9eb;
  border-radius: 200em;
  position: absolute;
  top: -4%;
  right: 10%;
  text-align: center;
}

.triangle-right {
  width: 201px;
  height: 201px;
  background-color: #6930c3;
  transform: rotate(-30deg);
  position: absolute;
  bottom: -66px;
  right: -30px;
  text-align: center;
}

.ant-btn-primary:hover {
  background-color: #815cbd;
  border-color: #815cbd;
}

.ant-btn-primary {
  background-color: #6930c3;
  border-color: #6930c3;
}

.ant-btn-primary:disabled {
  background-color: #6930c3;
  border-color: #6930c3;
  color: rgb(196, 196, 196);
}

.form {
  width: 30%;
}
</style>
