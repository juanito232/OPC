<template>
    <home>
        <div>
       <q-card class="estiloCard" dark bordered>
      <q-card-section>
        <div class="text-h6">Saldo</div>
        <div class="text-subtitle2"> $ 1.500.000 </div>
      </q-card-section>
     </q-card> 
     <q-card class="estiloCard2" dark bordered>
      <q-card-section>
        <div class="text-h6">Ingresos</div>
        <div class="text-subtitle2"> $ 2.000.000</div>
      </q-card-section>
     </q-card> 
     <q-card class="estiloCard3" dark bordered>
      <q-card-section>
        <div class="text-h6">Gastos</div>
        <div class="text-subtitle2"> $ 500.000 </div>
      </q-card-section>
     </q-card> 
</div>
    </home>
</template>

<script>
import Home from '../pages/Home.vue'
export default {
    name:'summary',
    components:{
        Home
    }
}
</script>

<style scoped>
.estiloCard {
  background-color: #6930c3;
  color: white;
  width: 100%;
  max-width: 250px;
  margin-left: 3.5%;
  display: inline-block;
}
.estiloCard2 {
  background-color: #4caf50;
  color: white;
  width: 100%;
  max-width: 250px;
  margin-left: 3.5%;
  display: inline-block;
}
.estiloCard3 {
  background-color: #ef5350;
  color: white;
  width: 100%;
  max-width: 250px;
  margin-left: 3.5%;
  display: inline-block;
}
</style>