<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Umum"
      class="px-5 py-3"
    >
      <v-fab-transition>
        <v-btn
          to="/infodesa/umum/Form"
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
      <div class="text-right">
        <v-btn
          class="mx-2"
          dark
          small
          color="cyan"
        >
          <v-icon dark>
            mdi-export
          </v-icon>
          Export
        </v-btn>
        <v-btn
          class="mx-2"
          dark
          small
          color="cyan"
        >
          <v-icon dark>
            mdi-import
          </v-icon>
          Import
        </v-btn>
      </div>
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
        :items="data_umum"
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
          { text: 'Luas Desa', value: 'luas_desa' },
          { text: 'Total Dusun', value: 'total_dusun' },
          { text: 'Batas Wilayah Barat', value: 'bw_barat' },
          { text: 'Batas Wilayah Utara', value: 'bw_utara' },
          { text: 'Batas Wilayah Selatan', value: 'bw_selatan' },
          { text: 'Batas Wilayah Timur', value: 'bw_timur' },
          { text: 'Jarak Dari Pusat Kecamatan', value: 'jp_kecamatan' },
          { text: 'Jarak Dari Pusat Kabupaten', value: 'jp_kabupaten' },
          { text: 'Jarak Dari Pusat Provinsi', value: 'jp_provinsi' },
          // { text: 'Status Desa', value: 'status_desa' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        data_umum: [],
      }
    },
    watch: {
      data_umum () {
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
        this.axios.get('/inf-umum')
          .then((response) => {
            const { data } = response.data
            this.data_umum = data
            console.log(response)
          })
          .catch((error) => {
            console.log(error.response)
          })
      },
      edit (item) {
        this.$router.push({
          name: 'Form Umum', params: { data: item, update: true },
        })
      },
      del (item) {
        confirm('Yakin ingin menghapus Umum dari ' + item.umum + '?') &&
          this.axios.delete('/inf-umum/' + item.id).then(res => {
            this.setAlert({
              status: true,
              text: 'Data Umum berhasil dihapus!',
              color: 'success',
            })
            this.load()
          })
      },
    },
  }
</script>
