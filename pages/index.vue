<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Drawer :collapsed="collapsed" />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="header">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />

          <a-menu v-model="current" mode="horizontal">
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper"
                ><a-icon type="account-book" class="trigger"
              /></span>
              <a-menu-item-group title="Cuenta">
                <a-menu-item key="logout" @click="logout">
                  Cerrar sesión
                </a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
          </a-menu>
        </div>
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
import Drawer from "../components/Drawer.vue";
import { mapActions } from "vuex";
export default {
  middleware: "auth",
  components: {
    Drawer
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    ...mapActions("auth", {
      tryLogout: "logout"
    }),
    logout() {
      this.tryLogout();
      this.$router.push({ path: "/login" });
    }  
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
