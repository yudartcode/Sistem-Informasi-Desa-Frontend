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
        data_umum: [],
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
        const url = '/umum'
        this.axios.get(url)
          .then((response) => {
            const { data } = response.data
            this.data_umum = data
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
          this.axios.delete('/umum/' + item.id).then(res => {
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
