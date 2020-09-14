<template>
  <v-container
    fluid
    tag="section"
  >
    <v-alert
      v-model="alert"
      dense
      text
      outlined
      type="success"
    >
      Data <strong>Kartu Keluarga</strong> Berhasil Ditambahkan!
    </v-alert>
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
      title="Input Kartu Keluarga"
    >
      <v-fab-transition>
        <v-btn
          to="/kependudukan/kartu-keluarga/index"
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
            <!-- <v-select
              v-model="form.province_id"
              :items="provinces"
              item-text="province"
              item-value="id"
              label="Province"
              persistent-hint
              single-line
            />

            <v-select
              v-if="province_id>0"
              v-model="form.city_id"
              :items="citiesByProvince"
              item-text="city_name"
              item-value="id"
              label="City"
              persistent-hint
              single-line
            /> -->
            <v-text-field
              v-model="form.provinsi"
              label="provinsi"
              required
            />
            <v-text-field
              v-model="form.kabupaten"
              label="kabupaten"
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
              label="kelurahan"
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
            <v-btn
              v-show="updateSubmit"
              class="mr-4"
              color="blue"
              type="button"
              @click="update(form)"
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
  export default {

    data () {
      return {
        alert: false,
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
    // created () {
    //   this.city_id = this.user.city_id
    //   this.province_id = this.user.province_id

    //   if (this.provinces && this.provinces.length === 0) {
    //     this.axios.get('/provinces')
    //       .then((response) => {
    //         const { data } = response.data
    //         this.setProvinces(data)
    //       })

    //     this.axios.get('/cities')
    //       .then((response) => {
    //         const { data } = response.data
    //         this.setCities(data)
    //       })
    //   }
    // },
    methods: {
      add () {
        this.axios.post('/kartu-keluarga', this.form).then(res => {
          this.form = ''
          this.alert = true
        })
      },
    },
  }
</script>
