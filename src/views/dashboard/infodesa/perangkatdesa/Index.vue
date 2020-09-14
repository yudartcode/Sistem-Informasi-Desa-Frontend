<template>
  <v-container
    id="administrasi"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Perangkat Desa"
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
          { text: 'Nama Kades', value: 'id' },
          { text: 'Masa Jabatan', value: 'masaj' },
          { text: 'Telephone', value: 'telephone' },
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
        const url = '/perangkatdesa?page=' + this.page
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
