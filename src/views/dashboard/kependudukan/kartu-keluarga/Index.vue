<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Kartu Keluarga"
      class="px-5 py-3"
    >
      <v-fab-transition>
        <v-btn
          to="/kependudukan/kartu-keluarga/Create"
          color="primary"
          dark
          absolute
          top
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
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
        :loading="true"
        :search="search"
      >
        <v-progress-linear
          v-show="progressBar"
          slot="progress"
          color="blue"
          indeterminate
        />
        <template v-slot:[`item.action`]="{ item }">
          <v-icon
            color="orange"
            class="mr-2"
            @click="edit(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            color="red"
            @click="del(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
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
          { text: 'Action', value: 'action', sortable: false },
        ],
        data_kk: [],
        page: 0,
        lengthPage: 0,
      }
    },
    watch: {
      data_kk () {
        this.progressBar = false
      },
    },
    created () {
      this.progressBar = true
      this.load()
    },
    methods: {
      load () {
        const url = '/kartu-keluarga'
        this.axios.get(url)
          .then((response) => {
            const { data } = response.data
            this.data_kk = data
          })
          .catch((error) => {
            console.log(error.response)
          })
      },
      edit (item) {
        return item
      },
      del (item) {
        confirm('Are you sure you want to delete this item?') &&
          this.axios.delete('/kartu-keluarga/' + this.item.id).then(res => {
            this.load()
          })
      },
    },
  }
</script>
