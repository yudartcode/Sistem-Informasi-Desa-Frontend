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
              v-model="form.ld"
              label="Luas Desa"
              required
            />
            <v-text-field
              v-model="form.jd"
              label="Jumlah Dusun"
              required
            />
            <v-text-field
              v-model="form.bataswb"
              label="Batas Wilayah Barat"
              required
            />
            <v-text-field
              v-model="form.bataswu"
              label="Batas Wilayah Utara"
              required
            />
            <v-text-field
              v-model="form.batasws"
              label="Batas Wilayah Selatan"
              required
            />
            <v-text-field
              v-model="form.bataswt"
              label="Batas Wilayah Timur"
              required
            />
          </v-col>
          <v-col md="6">
            <v-text-field
              v-model="form.jarakdpkec"
              label="Jarak dari Pusat Kecamatan"
              required
              type="number"
            />
            <v-text-field
              v-model="form.jarakdpkab"
              label="Jarak dari Pusat Kabupaten"
              type="number"
            />
            <v-text-field
              v-model="jarakdpprov"
              label="Jarak dari Pusat Provinsi"
              required
              type="number"
            />
            <v-text-field
              v-model="form.status"
              label="Status Desa"
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
          ld: '',
          jd: '',
          bataswb: '',
          bataswu: '',
          batasws: '',
          bataswt: '',
          jarakdpkec: '',
          jarakdpkab: '',
          jarakdpprov: '',
          status: '',
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
        this.axios.post('/umum', this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Umum Berhasil Ditambahkan!',
          })
        })
      },
      update () {
        this.axios.put('/umum/' + this.form.id, this.form).then(res => {
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
