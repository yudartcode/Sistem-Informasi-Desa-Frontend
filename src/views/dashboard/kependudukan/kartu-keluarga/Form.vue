<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
      title="Form Kartu Keluarga"
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
              v-if="updateSubmit"
              v-model="form.id"
              label="No. Kartu Keluarga"
              disabled
              type="number"
            />
            <v-text-field
              v-if="!updateSubmit"
              v-model="form.id"
              label="No. Kartu Keluarga"
              :rules="rules"
              type="number"
            />
            <v-text-field
              v-model="form.kepala_keluarga"
              label="Kepala Keluarga"
              :rules="rules"
            />
            <v-text-field
              v-model="form.provinsi"
              label="Provinsi"
              :rules="rules"
            />
            <v-text-field
              v-model="form.kabupaten"
              label="Kabupaten"
              :rules="rules"
            />
            <v-text-field
              v-model="form.kecamatan"
              label="Kecamatan"
              :rules="rules"
            />
          </v-col>
          <v-col md="6">
            <v-text-field
              v-model="form.kelurahan"
              label="Kelurahan"
              :rules="rules"
            />
            <v-text-field
              v-model="form.kode_pos"
              label="Kode Pos"
              type="number"
            />
            <v-text-field
              v-model="form.rt"
              label="RT"
              :rules="rules"
              type="number"
            />
            <v-text-field
              v-model="form.rw"
              type="number"
              label="RW"
            />
            <v-text-field
              v-model="form.alamat"
              label="Alamat"
              :rules="rules"
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
        rules: [
          value => !!value || 'Tidak boleh kosong.',
        ],
      }
    },
    created () {
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
      add () {
        this.axios.post('/kartu-keluarga', this.form)
          .then((res) => {
            if (res.data.success === true) {
              this.setAlert({
                status: true,
                color: 'success',
                text: 'Data Kartu Keluarga Berhasil Ditambahkan!',
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
        this.axios.put('/kartu-keluarga/' + this.form.id, this.form).then(res => {
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Kartu Keluarga Berhasil Diupdate!',
          })
        })
      },
    },
  }
</script>
