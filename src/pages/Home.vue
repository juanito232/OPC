<template>
    <q-layout >
  <div class="q-pa-md" >
    <q-header elevated class="bg-black">
    <Toolbar/>
    </q-header>
  </div>
  
   <Drawer/>

   <q-page-container>
        <q-page class="q-px-lg q-py-md">
          <slot></slot>
          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              v-model="fabRight"
              vertical-actions-align="right"
              color="deep-purple-6"
              
              icon="keyboard_arrow_up"
              direction="up">
              <router-link to="/income"><q-fab-action label-position="left" color="green" @click="onClick" icon="mood" label="Ingresos" /></router-link>
              <router-link to="/expenses"><q-fab-action label-position="left" color="red" @click="onClick" icon="mood_bad" label="Gastos" /></router-link>
            </q-fab>
          </q-page-sticky>
        </q-page>
      </q-page-container>

    </q-layout>
  </template>

<script>
  import { ref } from 'vue'
  import Toolbar from '../components/Toolbar.vue'
  import Drawer from '../components/Drawer.vue'

  export default {  
    components:{
      Toolbar,
      Drawer
    },
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

<style lang="sass" scoped >

</style>