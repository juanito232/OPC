<template>
    <home>
        <h2>Ingresos</h2>
        <div v-for="income in incomes" :key="income.id">
            <q-card dark bordered class="estiloCard" >
                <q-card-section>
                <div class="text-h6">Nombre: {{income.name}}</div>
                <div class="text-subtitle2"> Valor: {{income.value}} </div>
                </q-card-section>
                
            </q-card>
        </div>
    </home>
</template>

<script>
import Home from './Home.vue'
import Axios from "axios";
export default {
    data(){
        return{
            incomes:[]
        }
    },
    name:'Home-Content',
    components:{
            Home
    },
    beforeMount(){
        console.log("parametro:",this.$route.params.id)
        this.getIncomes()
    },
    methods:{
        getIncomes(){
            Axios.get('http://localhost:3000/getIncome/'+this.$route.params.id).then(res=>{
                console.log(res.code);
                console.log(res);
                if (res.data.code == 100){
                    console.log("OK");
                    this.incomes = res.data.data;
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

<style>
.estiloCard {
  background-color: #6930c3;
  color: white;
  width: 100%;
  max-width: 250px;
  margin-left: 3.5%;
  display: inline-block;
  padding: 20px;
}
</style>