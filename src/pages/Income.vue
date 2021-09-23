<template>
  <home>
      <div>
    <q-form action="" @submit.prevent="income">
      <h1 class="estiloTitulo">Ingresos</h1>
      <div class="inputs">
        <label for="name" class="estiloLabel"> Nombre </label>
        <q-input outlined v-model="income.name" />
      </div>
      <div class="inputs">
        <label for="value" class="estiloLabel"> Valor </label>
        <q-input outlined v-model="income.value" />
      </div>
      <div class="inputs">
        <label for="date" class="estiloLabel"> Fecha </label>
        <q-input outlined v-model="income.date" />
      </div>
      <div class="estiloDescripcion">
        <label for="description" class="estiloLabel"> Descripción </label>
        <q-input outlined v-model="income.description" />
      </div>
      <q-btn type="submit" class="estiloButton" label="Guardar" @click="save" />
    </q-form>
      </div>
  </home>
</template>

<script>
import Home from '../pages/Home.vue'
import Axios from "axios";

export default {
    name:'income',
          components: {
            Home
        },  
        data() {
        return {
            income: {
                userId: this.$route.params.id,
                name: "",
                value: "",
                date: "",
            },
        }
     },
     methods:{
       save(){
         console.log("Id del usuario: "+this.$route.params.id);
         Axios.post('http://localhost:3000/addIncome/',this.income).then(res=>{
                console.log(res.code);
                console.log(res);
                if (res.data.code == 100){
                    console.log("OK");
                    this.$router.push({name:'Home-Content', params:{id: res.data.data.userId}})
                }else{
                    console.log("Error",res);
                }
            }).catch((err)=>{
                    console.log("Error",err);
            })
       }
     }
}

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
.estiloDescripcion{
    margin: 0 auto;
    width: 30%;
    text-align: start;
    
}
</style>






