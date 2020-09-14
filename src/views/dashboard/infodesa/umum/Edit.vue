<template>
  <v-container
    id="umume"
    fluid
    tag="section"
  >

        <base-material-card
      icon="mdi-file"
      class="px-5 py-3"
      title="Input Data Umum"
    >
                <v-col sm="2">
                  <v-text-field
                    label="Luas Desa"
                  />
                  <v-text-field
                    label="Jumlah Dusun"
                  />
                  <v-text-field
                    label="Batas Wilayah Barat"
                  />
                  <v-text-field
                    label="Batas Wilayah Utara"
                  />
                  <v-text-field
                    label="Batas Wilayah Selatan"
                  />
                  <v-text-field
                    label="Batas Wilayah Timur"
                  />
                  <v-text-field
                    label="Jarak dari Pusat Kecamatan"
                  />
                  <v-text-field
                    label="Jarak dari Pusat Kabupaten"
                  />
                  <v-text-field
                    label="Jarak dari Pusat Provinsi"
                  />
                  <v-text-field
                    label="Status Desa"
                  />
                </v-col>
                  <v-btn
    class="mr-4"
    @click="submit"
    color="blue"
    >Simpan</v-btn>
    <v-btn
    @click="clear"
    color="error"
    >clear</v-btn>
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
