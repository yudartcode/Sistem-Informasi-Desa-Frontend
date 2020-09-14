<template>
  <v-container
    id="pendudukk"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Penduduk"
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
        :items="data_penduduk"
        :search="search"
      />
    </base-material-card>
  </v-container>
</template>
<script>
  export default {
    name: 'ListPenduduk',
    data () {
      return {
        search: '',
        headers: [
          { text: 'NIK', value: 'id' },
          { text: 'Nama', value: 'nama' },
          { text: 'Tempat Lahir', value: 'tempat_lahir' },
          { text: 'Tanggal Lahir', value: 'tanggal_lahir' },
          { text: 'Darah', value: 'darah' },
          { text: 'Alamat', value: 'alamat' },
          { text: 'Agama', value: 'agama' },
          { text: 'Perkawinan', value: 'perkawinan' },
          { text: 'Kewarganegaraan', value: 'kewarganegaraan' },
          { text: 'Status Hidup', value: 'status_hidup' },
        ],
        data_penduduk: [],
        page: 0,
        lengthPage: 0,
      }
    },
    created () {
      this.go()
    },
    methods: {
      go () {
        const url = '/penduduk?page=' + this.page
        this.axios.get(url)
          .then((response) => {
            const { data } = response.data
            const { meta } = data
            this.data_penduduk = data
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
