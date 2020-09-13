<template>
  <v-container
    id="list"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Kartu Keluarga"
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
          { text: 'No KK', value: 'id' },
          { text: 'Kepala Keluarga', value: 'kepala_keluarga' },
          { text: 'Alamat', value: 'alamat' },
          { text: 'RT', value: 'rt' },
          { text: 'RW', value: 'rw' },
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
        const url = '/kartu-keluarga?page=' + this.page
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
