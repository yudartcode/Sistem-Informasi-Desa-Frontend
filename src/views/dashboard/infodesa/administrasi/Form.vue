<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
      title="Form Administrasi"
    >
      <v-fab-transition>
        <v-btn
          to="/infodesa/administrasi/Index"
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
              v-model="form.alamat"
              label="Alamat Kantor"
              required
            />
            <v-text-field
              v-model="form.telp"
              label="Telephone Kantor"
              type="number"
            />
            <v-text-field
              v-model="form.email"
              label="Email Desa"
              required
            />
            <!-- <v-text-field
              v-model="form.web"
              label="Website Desa"
              required
            /> -->
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
          alamat: '',
          telp: '',
          email: '',
          // web: '',
        },
        aministrasi: '',
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
        this.axios.post('/inf-administrasi', this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Administrasi Berhasil Ditambahkan!',
          })
        })
      },
      update () {
        this.axios.put('/inf-administrasi/' + this.form.id, this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Administrasi Berhasil Diupdate!',
          })
        })
      },
    },
  }
</script>
