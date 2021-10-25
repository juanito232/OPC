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
        @submit="login2"
        @submit.native.prevent
      >
      <span>Ingrese su correo y contraseña: {{ msg }}</span>
      <pre></pre>
      <pre></pre>
        <a-form-model-item prop="email">
          <a-input
            v-model="form.email"
            placeholder="Correo electrónico"
            size="large"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input
            v-model="form.password"
            type="password"
            placeholder="Contraseña"
            size="large"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <div class="buttons">
          <a-form-model-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="form.email === '' || form.password === ''"
            >
              Iniciar sesión
            </a-button>
          </a-form-model-item>
          <div>
            <a-form-model-item>
              <a-button type="primary" @click="goToRegister">
                Registrarse
              </a-button>
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" @click="goToRequestPassword">
                ¿Olvido su contraseña?
              </a-button>
            </a-form-model-item>
          </div>
        </div>
      </a-form-model>
    </div>
  </a-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  middleware: 'login',
  data() {
    let validateEmail = (rule, value, callback) => {
      if (
        !/[a-z0-9]+(.[_a-z0-9]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,15})/i.test(
          value
        )
      ) {
        callback(new Error("Por favor ingrese un email valida"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (!/[A-Z]/.test(value)) {
        callback(new Error("La contraseña debe tener al menos una mayúscula."));
      } else if (!/[0-9]/.test(value)) {
        callback(new Error("La contraseña debe tener al menos un número."));
      } else if (!/.{6,}/.test(value)) {
        callback(new Error("La contraseña debe tener mínimo 6 caracteres."));
      } else {
        callback();
      }
    };
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "change" }]
      }
    };
  },
  methods: {
    ...mapActions("auth", {
      tryLogin: "login"
    }),
    login2() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.tryLogin({ data: this.form })
            .then(res => {
              this.$router.push({path:'/'});
            })
            .catch(e => {
              console.log(e);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    goToRegister() {
      this.$router.push({ path: "/register" });
    },
    goToRequestPassword() {
      this.$router.push({ path: "/requestPassword" });
    }
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
