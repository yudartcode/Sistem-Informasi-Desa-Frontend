<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
      title="Form Umum"
    >
      <v-fab-transition>
        <v-btn
          to="/infodesa/umum/Index"
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
              v-model="form.luas_desa"
              label="Luas Desa"
              type="number"
            />
            <v-text-field
              v-model="form.total_dusun"
              label="Total Dusun"
              type="number"
            />
            <v-text-field
              v-model="form.bw_barat"
              label="Batas Wilayah Barat"
              required
            />
            <v-text-field
              v-model="form.bw_utara"
              label="Batas Wilayah Utara"
              required
            />
            <v-text-field
              v-model="form.bw_selatan"
              label="Batas Wilayah Selatan"
              required
            />
            <v-text-field
              v-model="form.bw_timur"
              label="Batas Wilayah Timur"
              required
            />
          </v-col>
          <v-col md="6">
            <v-text-field
              v-model="form.jp_kecamatan"
              label="Jarak dari Pusat Kecamatan"
              type="number"
            />
            <v-text-field
              v-model="form.jp_Kabupaten"
              label="Jarak dari Pusat Kabupaten"
              type="number"
            />
            <v-text-field
              v-model="form.jp_provinsi"
              label="Jarak dari Pusat Provinsi"
              required
              type="number"
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
          luas_desa: '',
          total_dusun: '',
          bw_barat: '',
          bw_utara: '',
          bw_selatan: '',
          bw_timur: '',
          jp_kecamatan: '',
          jp_kabupaten: '',
          jp_provinsi: '',
        },
        umum: '',
        updateSubmit: false,
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
        this.axios.post('/inf-umum', this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Umum Berhasil Ditambahkan!',
          })
        })
      },
      update () {
        this.axios.put('/inf-umum/' + this.form.id, this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Umum Berhasil Diupdate!',
          })
        })
      },
    },
  }
</script>
