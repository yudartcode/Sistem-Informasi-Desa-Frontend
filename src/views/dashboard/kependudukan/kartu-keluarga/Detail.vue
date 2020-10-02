<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Detail Kartu Keluarga"
      class="px-5 py-3"
    >
      <v-fab-transition>
        <v-btn
          to="/kependudukan/kartu-keluarga/Index"
          color="secondary"
          dark
          absolute
          top
          right
          fab
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-row>
        <v-col md="6">
          <v-simple-table>
            <tr>
              <td class="font-weight-bold">
                No Kartu Keluarga
              </td>
              <td class="font-weight-bold">
                :
              </td>
              <td>{{ data_kk.id }}</td>
            </tr>
            <tr>
              <td class="font-weight-bold">
                Nama Kepala Keluarga
              </td>
              <td class="font-weight-bold">
                :
              </td>
              <td>{{ data_kk.kepala_keluarga }}</td>
            </tr>
          </v-simple-table>
        </v-col>
        <v-col md="6">
          <v-simple-table>
            <tr>
              <td class="font-weight-bold">
                Alamat
              </td>
              <td class="font-weight-bold">
                :
              </td>
              <td>{{ data_kk.alamat }}</td>
            </tr>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-divider />
      <br>
      <p class="font-weight-bold text-center">
        Anggota Keluarga
      </p>
      <v-divider />
      <v-btn
        class="mx-2 my-2"
        dark
        small
        color="primary"
        @click="addAnggota(id_kk)"
      >
        <v-icon dark>
          mdi-account-plus
        </v-icon>
      </v-btn>
      <v-data-table
        :headers="headers"
        :items="data_anggota"
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
    name: 'DetailKartuKeluarga',
    data () {
      return {
        search: '',
        data_kk: {
          id: '',
          kepala_keluarga: '',
          alamat: '',
        },
        id_kk: '',
        headers: [
          { text: 'NIK', value: 'id' },
          { text: 'Nama', value: 'nama' },
          { text: 'Tempat Lahir', value: 'tempat_lahir' },
          { text: 'Tanggal Lahir', value: 'tanggal_lahir' },
          // { text: 'Darah', value: 'darah' },
          { text: 'JK', value: 'jenis_kelamin' },
          { text: 'Alamat', value: 'alamat' },
          { text: 'Agama', value: 'agama' },
          { text: 'Perkawinan', value: 'perkawinan' },
          // { text: 'Kewarganegaraan', value: 'kewarganegaraan' },
          { text: 'Status Hidup', value: 'status_hidup' },
          // { text: 'No KK', value: 'kartukeluarga_id' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        data_anggota: [],
      }
    },
    watch: {
      data_anggota () {
        this.progressBar = false
      },
    },
    created () {
      this.id_kk = this.$route.params.data
      this.load()
      this.progressBar = true
      this.loadAnggota(this.id_kk)
    },
    methods: {
      ...mapActions({
        setAlert: 'alert/set',
      }),
      load () {
        this.axios.get('/kartu-keluarga/' + this.id_kk)
          .then((response) => {
            const { data } = response.data
            this.data_kk = data
          })
          .catch((error) => {
            console.log(error.response)
          })
      },
      loadAnggota (id) {
        this.axios.get('/kartu-keluarga/member/' + id)
          .then((response) => {
            this.data_anggota = response.data
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
        console.log(item)
        confirm('Yakin ingin menghapus ' + item.id + '?') &&
          this.axios.delete('/penduduk/' + item.id)
            .then(res => {
              this.setAlert({
                status: true,
                text: 'Data Penduduk berhasil dihapus!',
                color: 'success',
              })
              this.loadAnggota(this.id_kk)
            })
      },
      // eslint-disable-next-line camelcase
      addAnggota (id) {
        this.$router.push({
          name: 'Form Penduduk', params: { data: id },
        })
      },
    },
  }
</script>
