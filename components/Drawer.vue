<template>
    <a-layout-sider :style="{minHeight:'200vh'}" v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1"  @click="$router.push({path:'/'})">
          <a-icon type="user" />
          <span>Inicio</span>
        </a-menu-item>
        <a-menu-item key="2" @click="$router.push({path:'/movements'})">
          <a-icon type="video-camera" />
          <span>Movimientos</span>
        </a-menu-item>
        <a-menu-item key="3" @click="$router.push({path:'/statistics'})">
          <a-icon type="upload" />
          <span>Statistics</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    name:'Drawer',
    props:['collapsed'],
    methods:{
      getClassIfSelected(){
        console.log(this.$route.path);
        if(this.$route.path=="/movements"){
           return '2';
        }
        else{
          return '1';
        }
      }
    }
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>