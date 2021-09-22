<template>
    <q-layout
    style="background: linear-gradient(90deg, rgba(144,111,195,1) 0%, rgba(100,223,223,0.6292892156862745) 100%, rgba(105,48,195,0.5032387955182073) 100%);"
  >
  <div class="q-pa-md" >
    <div class="bg-cyan text-white">
      <q-toolbar>
        <q-btn flat round dense icon="assignment_ind" />

        <q-toolbar-title>OPC</q-toolbar-title>

        <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
        <q-btn flat round dense icon="gamepad" />
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Resumen" icon="home" />
          <q-breadcrumbs-el label="Movimientos" icon="upgrade" />
          <q-breadcrumbs-el label="Billeteras" icon=""/>
          <q-breadcrumbs-el label="Estadisticas" icon="" />
        </q-breadcrumbs>
      </q-toolbar>

    </div>
  </div>
  
  <div class="q-pa-md" style="padding-top: 38%" >
        <div class="row justify-end">

      <q-fab
        v-model="fabRight"
        vertical-actions-align="right"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action label-position="left" color="green" @click="onClick" icon="mood" label="Ingresos" />
        <q-fab-action label-position="left" color="red" @click="onClick" icon="mood_bad" label="Gastos" />
      </q-fab>
       </div>
   </div>

    </q-layout>
  </template>

<script>
  import { ref } from 'vue'
    export default {  
      setup () {
        return {
          fabLeft: ref(true),
          fabCenter: ref(true),
          fabRight: ref(true),

          onClick () {
            // console.log('Clicked on a fab action')
          }
        }
      }
}
</script>
