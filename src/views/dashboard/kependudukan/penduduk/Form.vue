<template>
  <v-container
    fluid
  >
    <base-material-card
      icon="mdi-file"
      class="px-5 py-3"
      title="Form Penduduk"
    >
      <v-fab-transition>
        <v-btn
          color="secondary"
          dark
          absolute
          top
          right
          fab
          @click="backToDetail()"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-form
        ref="form"
        lazy-validation
        @submit.prevent="add"
      >
        <v-row>
          <v-col md="6">
            <v-text-field
              v-model="form.kartukeluarga_id"
              label="No KK"
              type="number"
              disabled
            />
            <v-text-field
              v-model="form.id"
              label="NIK"
              required
              type="number"
            />
            <v-text-field
              v-model="form.nama"
              label="Nama"
              required
            />
            <v-text-field
              v-model="form.tempat_lahir"
              label="Tempat Lahir"
              required
            />
            <template>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="form.tanggal_lahir"
                    label="Tanggal Lahir"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="form.tanggal_lahir"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                />
              </v-menu>
            </template>
            <v-select
              v-model="form.jenis_kelamin"
              :items="jk"
              label="Jenis Kelamin"
              required
            />
            <v-select
              v-model="form.agama"
              :items="agama"
              label="Agama"
            />
            <v-select
              v-model="form.darah"
              :items="gd"
              label="Golongan darah"
            />
          </v-col>
          <v-col md="6">
            <v-text-field
              v-model="form.alamat"
              label="Alamat"
            />
            <v-text-field
              v-model="form.rt"
              label="RT"
              required
              type="number"
            />
            <v-text-field
              v-model="form.rw"
              type="number"
              label="RW"
            />
            <v-text-field
              v-model="form.kelurahan"
              label="Kelurahan"
            />
            <v-text-field
              v-model="form.kecamatan"
              label="Kecamatan"
            />
            <v-select
              v-model="form.perkawinan"
              :items="perkawinan"
              label="Status Perkawinan"
            />
            <v-text-field
              v-model="form.kewarganegaraan"
              label="Kewarganegaraan"
            />
            <v-select
              v-model="form.status_hidup"
              :items="status_hidup"
              label="Status Hidup"
            />
            <v-btn
              v-show="!updateSubmit"
              class="mr-4"
              color="primary"
              type="submit"
            >
              Simpan
            </v-btn>
            <v-btn
              v-show="updateSubmit"
              type="button"
              color="blue"
              @click="update()"
            >
              Update
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </base-material-card>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        jk: ['L', 'P'],
        agama: ['Islam', 'Kristen', 'Hindu', 'Budha'],
        gd: ['A', 'AB', 'B', 'O'],
        perkawinan: ['Belum', 'Sudah'],
        status_hidup: ['Hidup', 'Meninggal'],
        form: {
          id: '',
          nama: '',
          tempat_lahir: '',
          tanggal_lahir: '',
          jenis_kelamin: '',
          agama: '',
          darah: '',
          alamat: '',
          rt: '',
          rw: '',
          kelurahan: '',
          kecamatan: '',
          perkawinan: '',
          kewarganegaraan: '',
          status_hidup: '',
          kartukeluarga_id: '',
        },
        updateSubmit: false,
        menu: false,
      }
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    created () {
      this.form.kartukeluarga_id = this.$route.params.data
      this.updateSubmit = this.$route.params.update
      if (this.updateSubmit === true) {
        this.form = this.$route.params.data
      } else {
        this.updateSubmit = false
      }
    },
    methods: {
      ...mapActions({
        setAlert: 'alert/set',
      }),
      save (date) {
        this.$refs.menu.save(date)
      },
      add () {
        this.axios.post('/penduduk', this.form)
          .then((res) => {
            console.log(res)
            if (res.data.success === true) {
              this.setAlert({
                status: true,
                color: 'success',
                text: 'Data Penduduk Berhasil Ditambahkan!',
              })
            } else {
              this.setAlert({
                status: true,
                color: 'warning',
                text: res.data.message,
              })
            }
          })
      },
      update () {
        this.axios.put('/penduduk/' + this.form.id, this.form).then(res => {
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Penduduk Berhasil Diupdate!',
          })
        })
      },
      backToDetail () {
        this.$router.push({
          name: 'Detail Kartu Keluarga', params: { data: this.form.kartukeluarga_id },
        })
      },
    },
  }
</script>
