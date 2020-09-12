<template>
  <v-container
    id="kk"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-file"
      class="px-5 py-3"
      title="Input Kartu Keluarga"
    >
      <v-col sm="6">
        <v-row>
          <v-text-field
            label="No. Kartu Keluarga"
          />
          <v-btn
            class="mr-4"
            color="warning"
            @click="submit"
          >
            Cek
          </v-btn>
        </v-row>
        <v-row>
          <v-text-field
            label="Cari Anggota Keluarga"
          />
          <v-btn
            class="mr-4"
            color="success"
            @click="submit"
          >
            Cek
          </v-btn>
        </v-row>
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
