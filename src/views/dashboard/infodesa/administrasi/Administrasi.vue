<template>
  <v-container
    id="administrasi"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-file"
      class="px-5 py-3"
      title="Administrasi"
    >
      <v-col sm="4">
        <v-text-field
          label="Alamat Kantor"
        />
        <v-text-field
          label="Telp Kantor"
        />
        <v-text-field
          label="Email Desa"
        />
        <v-text-field
          label="Web Desa"
        />
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

    data: () => ({
    }),
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
