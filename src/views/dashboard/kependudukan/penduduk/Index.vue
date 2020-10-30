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
      <!-- <v-fab-transition>
        <v-btn
          to="/kependudukan/penduduk/Form"
          color="primary"
          dark
          absolute
          top
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition> -->
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
        :items="data_penduduk"
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
    name: 'ListPenduduk',
    data () {
      return {
        noData: 'No Data',
        search: '',
        headers: [
          { text: 'NIK', value: 'id' },
          { text: 'Nama', value: 'nama' },
          // { text: 'Tempat Lahir', value: 'tempat_lahir' },
          { text: 'Tanggal Lahir', value: 'tanggal_lahir' },
          // { text: 'Darah', value: 'darah' },
          { text: 'JK', value: 'jenis_kelamin' },
          { text: 'Alamat', value: 'alamat' },
          { text: 'Agama', value: 'agama' },
          { text: 'Perkawinan', value: 'perkawinan' },
          // { text: 'Kewarganegaraan', value: 'kewarganegaraan' },
          { text: 'Status Hidup', value: 'status_hidup' },
          { text: 'No KK', value: 'kartukeluarga_id' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        data_penduduk: [],
      }
    },
    watch: {
      data_penduduk () {
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
        const url = '/penduduk'
        this.axios.get(url)
          .then((response) => {
            const { data } = response.data
            this.data_penduduk = data
            console.log(this.data_penduduk)
          })
          .catch((error) => {
            console.log(error.response)
          })
      },
      edit (item) {
        this.$router.push({
          name: 'Form Penduduk', params: { data: item, update: true },
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
