<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />
    <alert />
    <dashboard-core-settings />
  </v-app>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'DashboardIndex',

    components: {
      Alert: () => import('./components/core/Alert.vue'),
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreSettings: () => import('./components/core/Settings'),
      DashboardCoreView: () => import('./components/core/View'),
    },
    data: () => ({
      expandOnHover: false,
    }),
    methods: {
      ...mapActions({
        setAlert: 'alert/set',
      }),
    },
  }
</script>
