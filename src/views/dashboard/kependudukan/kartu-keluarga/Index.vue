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
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="data_kk"
        :loading="true"
        :loading-text="noData"
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
            class="mr-2"
            @click="del(item)"
          >
            mdi-delete
          </v-icon>
          <v-icon
            color="primary"
            @click="toDetail(item)"
          >
            mdi-account-details
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
        noData: 'No Data',
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
        this.axios.get('/kartu-keluarga')
          .then((response) => {
            const { data } = response.data
            this.data_kk = data
          })
          .catch((error) => {
            this.setAlert({
              status: true,
              text: error,
              color: 'warning',
            })
          })
      },
      edit (item) {
        this.$router.push({
          name: 'Form Kartu Keluarga', params: { data: item, update: true },
        })
      },
      del (item) {
        confirm('Yakin ingin menghapus Kartu Keluarga dari ' + item.kepala_keluarga + '?') &&
          this.axios.delete('/kartu-keluarga/' + item.id)
            .then((res) => {
              if (res.data.error === true) {
                this.setAlert({
                  status: true,
                  text: res.data,
                  color: 'warning',
                })
              } else {
                this.setAlert({
                  status: true,
                  text: 'Data Kartu Keluarga Berhasil Dihapus!',
                  color: 'warning',
                })
              }
              this.load()
            })
      },
      toDetail (item) {
        this.$router.push({
          name: 'Detail Kartu Keluarga', params: { data: item.id },
        })
      },
    },
  }
</script>
