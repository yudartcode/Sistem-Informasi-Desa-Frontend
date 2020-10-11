<template>
  <v-footer
    id="dashboard-core-footer"
    padless
  >
    <v-col
      class="body-1 text-center"
    >
      &copy; {{ new Date().getFullYear() }}
      <v-icon size="18">
        mdi-heart
      </v-icon>
      by <a href="#">SIDE TEAM</a>.
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
