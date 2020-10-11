<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      class="px-5 py-3"
      title="Form Penduduk"
    >
      <v-fab-transition>
        <v-btn
          to="/infodesa/penduduk/Index"
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
              v-model="form.total_pria"
              label="Total Laki-Laki"
              type="number"
            />
            <v-text-field
              v-model="form.total_wanita"
              label="Total Perempuan"
              type="number"
            />
            <v-text-field
              v-model="form.total_kk"
              label="Total KK"
              type="number"
            />
            <v-text-field
              v-model="form.total_rtm"
              label="Total RTM"
              type="number"
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
          total_pria: '',
          total_wanita: '',
          total_kk: '',
          total_rtm: '',
        },
        penduduk: '',
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
        this.axios.post('/inf-penduduk', this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Penduduk Berhasil Ditambahkan!',
          })
        })
      },
      update () {
        this.axios.put('/inf-penduduk/' + this.form.id, this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Penduduk Berhasil Diupdate!',
          })
        })
      },
    },
  }
</script>
