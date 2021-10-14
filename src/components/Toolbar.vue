<template>
    <div class="toolbar">
      <q-toolbar>
        <q-toolbar-title class="title">OPC App</q-toolbar-title>
        <q-btn flat round dense icon="fas fa-user-circle" class="q-mr-xs">
          <q-menu>
          <q-item clickable v-close-popup>
              <q-item-section  @click="logout">Cerrar sesion</q-item-section>
            </q-item>
        </q-menu>
      </q-btn>
      </q-toolbar>
    </div>
</template>

<script>
export default {
    name:'Toolbar',
    methods:{
      logout(){
        localStorage.removeItem("user");
        this.$router.push({path:"/login"})
      }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@400&display=swap');

.toolbar{
    background: linear-gradient(74deg, rgba(105,48,195,1) 53%, rgba(100,223,223,1) 100%);
    font-family: 'Coda';
    font-size: 5em;
    padding:0.15em 0;
}

.title::before{
    background-image: url('../assets/logoCerdito2.png');
    background-size: 60px 60px;
    display: inline-block;
    vertical-align: -30%;
    background-repeat: no-repeat;
    right:10px;
    position: relative;
    width: 60px; 
    height: 60px;
    content:""
}

.q-toolbar__title{
font-size: 0.5em;
}
</style>