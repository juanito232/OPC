<template>
    <div class="q-pa-md">

      <q-drawer
        v-model="drawer"
        show-if-above

        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :mini=" miniState"
        @click.capture="drawerClick"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-deep-purple-6"
      >
        <template v-slot:mini>
          <q-scroll-area class="fit mini-slot cursor-pointer">
            <div class="q-py-lg">
              <div class="column items-center">
                <router-link to="/home"><q-icon name="home" color="white" class="mini-icon" /></router-link>
                <router-link to="/wallet"><q-icon name="account_balance_wallet" color="white" class="mini-icon" /></router-link>
                <router-link to="/movements"><q-icon name="update" color="white" class="mini-icon" /></router-link>
                <router-link to="/Statistics"><q-icon name="auto_graph" color="white" class="mini-icon" /></router-link>
              </div>
            </div>
          </q-scroll-area>
        </template>

        <q-scroll-area class="fit" style="color:white;">
          <q-list padding >
            <q-item clickable v-ripple active-class="drawer-item-active" @click="goToHome">
               <q-item-section avatar>
                <q-icon name="home" class="iconp" />
                </q-item-section>
              <q-item-section> Inicio </q-item-section>
            </q-item>

            <q-item active clickable v-ripple active-class="drawer-item-active" @click="goToWallet">
               <q-item-section avatar>
                <q-icon name="account_balance_wallet" class="iconp"/>
                </q-item-section>
              <q-item-section>
                Billetera
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToMovements">
                <q-item-section avatar>
                <q-icon name="update" class="iconp" />
                </q-item-section>
              <q-item-section>
                Movimientos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToStatistics">
               <q-item-section avatar>
                <q-icon name="auto_graph" class="iconp" />
                </q-item-section>
              <q-item-section>
                Estadisticas
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>


      </q-drawer>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name:'Drawer',
  methods:{
    goToHome(){
      this.$router.push('/home')
    },
    goToWallet(){
      this.$router.push('/wallet')
    },
    goToMovements(){
      this.$router.push('/movements')
    },
    goToStatistics(){
      this.$router.push('/statistics')
    }
  },
  setup () {
    const miniState = ref(true)
    return {
      drawer: ref(false),
      miniState,

      drawerClick (e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation()
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.mini-slot
  transition: background-color .28s
  &:hover
    background-color: rgba(0, 0, 0, .04)

.mini-icon
  font-size: 2em
  size: 2em
  margin-bottom: 20px

.iconp
  front-size: 2em
  size: 2em

  & + &
    margin-top: 18px

.drawer-item-active
  color: white
  background: #64dfdf

</style>