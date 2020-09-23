<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
      title="Input Kartu Keluarga"
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
      <v-form
        ref="form"
        lazy-validation
        @submit.prevent="add"
      >
        <v-row>
          <v-col md="6">
            <v-text-field
              v-model="form.id"
              label="No. Kartu Keluarga"
              required
            />
            <v-text-field
              v-model="form.kepala_keluarga"
              label="Kepala Keluarga"
              required
            />
            <v-text-field
              v-model="form.provinsi"
              label="Provinsi"
              required
            />
            <v-text-field
              v-model="form.kabupaten"
              label="Kabupaten"
              required
            />
            <v-text-field
              v-model="form.kecamatan"
              label="Kecamatan"
              required
            />
          </v-col>
          <v-col md="6">
            <v-text-field
              v-model="form.kelurahan"
              label="Kelurahan"
              required
            />
            <v-text-field
              v-model="form.kode_pos"
              label="Kode Pos"
            />
            <v-text-field
              v-model="form.rt"
              label="RT"
              required
            />
            <v-text-field
              v-model="form.rw"
              label="RW"
            />
            <v-text-field
              v-model="form.alamat"
              label="Alamat"
              required
            />
            <v-btn
              v-show="!updateSubmit"
              class="mr-4"
              color="primary"
              type="submit"
            >
              Simpan
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
        form: {
          id: '',
          kepala_keluarga: '',
          provinsi: '',
          kabupaten: '',
          alamat: '',
          kecamatan: '',
          kelurahan: '',
          rt: '',
          rw: '',
          kode_post: '',
        },
        kartuKeluarga: '',
        updateSubmit: false,
      }
    },
    methods: {
      ...mapActions({
        setAlert: 'alert/set',
      }),
      add () {
        this.axios.post('/kartu-keluarga', this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Kartu Keluarga Berhasil Ditambahkan!',
          })
        })
      },
    },
  }
</script>
