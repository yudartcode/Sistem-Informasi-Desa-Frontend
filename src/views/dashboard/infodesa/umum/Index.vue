<template>
  <v-container
    id="umum"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Umum"
      class="px-5 py-3"
    >
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="data_kk"
        :search="search"
      />
    </base-material-card>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Luas Desa', value: 'id' },
          { text: 'Jumlah Dusun', value: 'jumlah_dusun' },
          { text: 'Batas Wilayah Barat', value: 'bw_barat' },
          { text: 'Batas Wilayah Utara', value: 'bw_utara' },
          { text: 'Batas Wilayah Selatan', value: 'bw_selatan' },
          { text: 'Batas Wilayah Timur', value: 'bw_timur' },
          { text: 'Jarak Dari Pusat Kecamatan', value: 'jdp_kecamatan' },
          { text: 'Jarak Dari Pusat Kabupaten', value: 'jdp_kabupaten' },
          { text: 'Jarak Dari Pusat Provinsi', value: 'jdp_provinsi' },
          { text: 'Status Desa', value: 'status_desa' },
        ],
        data_kk: [],
        page: 0,
        lengthPage: 0,
      }
    },
    created () {
      this.go()
    },
    methods: {
      go () {
        const url = '/umum?page=' + this.page
        this.axios.get(url)
          .then((response) => {
            const { data } = response.data
            const { meta } = data
            this.data_kk = data
            this.lengthPage = meta.last_page
            this.page = meta.current_page
          })
          .catch((error) => {
            console.log(error.response)
          })
      },
    },
  }
</script>
