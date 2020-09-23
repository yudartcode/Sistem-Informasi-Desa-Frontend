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
          to="/kependudukan/kartu-keluarga/Form"
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
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        deleted: false,
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
      ...mapActions({
        setAlert: 'alert/set',
      }),
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
        this.$router.push({
          name: 'Form Kartu Keluarga', params: { data: item, update: true },
        })
      },
      del (item) {
        confirm('Yakin ingin menghapus Kartu Keluarga dari ' + item.kepala_keluarga + '?') &&
          this.axios.delete('/kartu-keluarga/' + item.id).then(res => {
            this.setAlert({
              status: true,
              text: 'Data Kartu Keluarga berhasil dihapus!',
              color: 'success',
            })
            this.load()
          })
      },
    },
  }
</script>
