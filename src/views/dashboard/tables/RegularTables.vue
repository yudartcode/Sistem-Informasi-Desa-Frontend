<template>
  <v-container
    id="umum"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-sitemap"
      class="px-5 py-3"
      title="Struktur Desa"
    >
      <v-col sm="4">
        <v-text-field label="Kepada Desa" />
        <v-text-field label="Jumlah Dusun" />
        <v-text-field label="Kepada urusan tata usaha dan umum" />
        <v-text-field label="Kepada urusan Ke uangan" />
        <v-text-field label="Kepada urusan Perencanaan" />
        <v-text-field label="Jarak dari Pusat Kecamatan" />
        <v-text-field label="Jarak dari Pusat Kabupaten" />
        <v-text-field label="Jarak dari Pusat Provinsi" />
        <v-text-field label="Status Desa" />
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
  }
</script>
