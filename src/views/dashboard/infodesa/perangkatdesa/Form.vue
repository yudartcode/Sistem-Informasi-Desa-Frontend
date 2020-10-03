<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
      title="Form Perangkat Desa"
    >
      <v-fab-transition>
        <v-btn
          to="/infodesa/perangkatdesa/Index"
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
              v-model="form.kades"
              label="Kepala Desa"
              required
            />
            <v-text-field
              v-model="form.sekdes"
              label="Sekertaris Desa"
              required
            />
            <v-text-field
              v-model="form.ku_tata_usaha"
              label="Tata usaha"
              required
            />
            <v-text-field
              v-model="form.ku_keuangan"
              label="Keuangan"
              required
            />
            <v-text-field
              v-model="form.ku_perencanaan"
              label="Perencanaan"
              required
            />
            <v-text-field
              v-model="form.ks_pemerintahan"
              label="Pemerintahan"
              required
            />
            <v-text-field
              v-model="form.ks_kesejahteraan"
              label="Kesejahteraan"
              required
            />
            <v-text-field
              v-model="form.ks_pelayanan"
              label="Pelayanan"
              required
            />
          </v-col>
          <v-col md="6">
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
          kades: '',
          sekdes: '',
          ku_tata_usaha: '',
          ku_keuangan: '',
          ku_perencanaan: '',
          ks_pemerintahan: '',
          ks_kesejahteraan: '',
          ks_pelayanan: '',
        },
        perangkatdesa: '',
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
        this.axios.post('/inf-perangkat', this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Perangkat Desa Berhasil Ditambahkan!',
          })
        })
      },
      update () {
        this.axios.put('/inf-perangkat/' + this.form.id, this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Perangkat Desa Berhasil Diupdate!',
          })
        })
      },
    },
  }
</script>
