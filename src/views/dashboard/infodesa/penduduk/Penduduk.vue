<template>
  <v-container
    id="penduduk"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-file"
      class="px-5 py-3"
      title="Input Penduduk"
    >
      <v-col sm="2">
        <v-text-field label="Jumlah Laki-Laki" />
        <v-text-field label="Jumlah Peremepuan" />
        <v-text-field label="Jumlah KK" />
        <v-text-field label="Jumlah RTM" />
      </v-col>
      <v-btn
        class="mr-4"
        color="blue"
        @click="submit"
      >
        Simpan
      </v-btn>
      <v-btn
        color="error"
        @click="clear"
      >
        clear
      </v-btn>
    </base-material-card>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardPenduduk',

    data: () => ({}),
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  }
</script>
