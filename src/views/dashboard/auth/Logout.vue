<template>
  <div>logout</div>
</template>
<script>
  export default {
    created () {
      this.$store.dispatch('destroyToken')
        .then(response => {
          this.$router.push({ path: '/auth/login' })
        })
    },
  }
</script>
