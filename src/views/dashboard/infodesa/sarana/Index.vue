<template>
  <v-container
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Sarana"
      class="px-5 py-3"
    >
      <v-fab-transition>
        <v-btn
          to="/infodesa/sarana/Form"
          color="primary"
          dark
          absolute
          top
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <div class="text-right">
        <v-btn
          class="mx-2"
          dark
          small
          color="cyan"
        >
          <v-icon dark>
            mdi-export
          </v-icon>
          Export
        </v-btn>
        <v-btn
          class="mx-2"
          dark
          small
          color="cyan"
        >
          <v-icon dark>
            mdi-import
          </v-icon>
          Import
        </v-btn>
      </div>
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="data_sarana"
        :loading="true"
        :search="search"
      >
        <v-progress-linear
          v-show="progressBar"
          slot="progress"
          color="blue"
          indeterminate
        />
        <template v-slot:[`item.action`]="{ item }">
          <v-icon
            color="orange"
            class="mr-2"
            @click="edit(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            color="red"
            @click="del(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        deleted: false,
        search: '',
        headers: [
          { text: 'Nama Sarana', value: 'nama' },
          { text: 'Alamat', value: 'alamat' },
          { text: 'Total', value: 'total' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        data_sarana: [],
      }
    },
    watch: {
      data_dusun () {
        this.progressBar = false
      },
    },
    created () {
      this.progressBar = true
      this.load()
    },
    methods: {
      ...mapActions({
        setAlert: 'alert/set',
      }),
      load () {
        const url = '/inf-sarana'
        this.axios.get(url)
          .then((response) => {
            const { data } = response.data
            this.data_sarana = data
          })
          .catch((error) => {
            console.log(error.response)
          })
      },
      edit (item) {
        this.$router.push({
          name: 'Form Info Sarana', params: { data: item, update: true },
        })
      },
      del (item) {
        confirm('Yakin ingin menghapus data dari ' + item.sarana + '?') &&
          this.axios.delete('/inf-sarana/' + item.id).then(res => {
            this.setAlert({
              status: true,
              text: 'Data Sarana berhasil dihapus!',
              color: 'success',
            })
            this.load()
          })
      },
    },
  }
</script>
