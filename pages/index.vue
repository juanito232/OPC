<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Drawer :collapsed="collapsed" />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Drawer from '../components/Drawer.vue';
export default {
  components: {
      Drawer
  },
  data() {
    return {
      collapsed:false
    };
  }
};
</script>

