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
              v-model="form.jl"
              label="Jumlah Laki-Laki"
              required
            />
            <v-text-field
              v-model="form.jp"
              label="Jumlah Perempuan"
              required
            />
            <v-text-field
              v-model="form.jkk"
              label="Jumlah KK"
              required
            />
            <v-text-field
              v-model="jrtm"
              label="Jumlah RTM"
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
          jl: '',
          jp: '',
          jkk: '',
          jrtm: '',
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
        this.axios.post('/penduduk', this.form).then(res => {
          this.form = ''
          this.setAlert({
            status: true,
            color: 'success',
            text: 'Data Penduduk Berhasil Ditambahkan!',
          })
        })
      },
      update () {
        this.axios.put('/penduduk/' + this.form.id, this.form).then(res => {
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
