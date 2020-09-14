<template>
  <v-container
    id="penduduk"
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
          { text: 'Jumlah Laki-Laki', value: 'id' },
          { text: 'Jumlah Perempuan', value: 'jp' },
          { text: 'Jumlah KK', value: 'jkk' },
          { text: 'Jumlah RTM', value: 'jrtm' },
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
        const url = '/penduduk?page=' + this.page
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
