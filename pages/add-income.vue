<template>
  <div>
    <h1 style="font-size: 2rem">Añadir ingreso</h1>
    <div class="form">
      <a-form-model
        ref="ruleForm"
        :rules="rules"
        :model="income"
        @submit="save"
        @submit.native.prevent
      >
        <a-form-model-item prop="name">
          <a-input v-model="income.name" placeholder="Nombre" size="large">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="value">
          <a-input-number
            placeholder="Valor"
            :formatter="
              (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
            @change="onChange"
            size="large"
            style="width: 60%"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-number>
        </a-form-model-item>
        <a-date-picker
          format="YYYY-MM-DD"
          style="margin-bottom: 2em"
          @change="onDateChange"
          placeholder="Fecha"
          size="large"
        />
        <a-textarea
          style="margin-bottom: 2em"
          placeholder="Descripcion"
          :rows="4"
          size="large"
          v-model="income.description"
        />
        <div class="buttons">
          <a-form-model-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="income.email === '' || income.password === ''"
            >
              Añadir ingreso
            </a-button>
          </a-form-model-item>
          <div></div>
        </div>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  layout: "home",
  data() {
    return {
      income: {
        name: "",
        value: "",
        date: "",
        description: "",
      },
    };
  },
  methods: {
    onDateChange(date, dateString) {
      this.income.date = dateString;
    },
    onChange(value) {
      this.income.value = value;
    },
    save() {
      Axios({
        method: "post",
        url: "http://localhost:3000/addIncome/",
        data: this.income,
        headers: {
          "OPC-Auth-Token": this.$store.getters["auth/authToken"],
        },
      })
        .then((res) => {
          console.log(res.code);
          console.log(res);
          if (res.data.code == 100) {
            console.log("OK");
            this.$router.push({ path: "/movements" });
          } else {
            console.log("Error", res);
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 3em;
  width: 60%;
}
</style>
