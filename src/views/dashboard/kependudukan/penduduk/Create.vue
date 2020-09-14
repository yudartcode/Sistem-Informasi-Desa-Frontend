<template>
  <v-container
    id="inputdata"
    fluid
    tag="section"
  >

        <base-material-card
      icon="mdi-file"
      class="px-5 py-3"
      title="Input Data Penduduk Desa"
    >
                <v-col sm="4">
                  <v-text-field
                    label="NIK"
                  />
                  <v-text-field
                    label="Nama"
                  />
                  <v-col
                  cols="12"
                  sm="6"
                  >
                      <v-overflow-btn
                      class="my-2"
                      :items="jk"
                      label="Jenis Kelamin"
                      target="#inputdata"
                      ></v-overflow-btn>
                      <v-overflow-btn
                      class="my-2"
                      :items="agama"
                      label="Agama"
                      target="#dropdown-example"
                      ></v-overflow-btn>
                      <v-overflow-btn
                      class="my-2"
                      :items="gd"
                      label="Golongan darah"
                      target="#dropdown-example"
                      ></v-overflow-btn>
                      </v-col>
                  <v-text-field
                    label="Nama Ayah"
                  />
                  <v-text-field
                    label="Nama Ibu"
                  />
                  <v-text-field
                    label="Nama Dusun"
                  />
                  <v-text-field
                    label="Alamat"
                  />
                  <v-text-field
                    label="RT/RW"
                  />
                  <v-text-field
                    label="Telephone"
                  />
                  <template>
                      <v-file-input
                      accept="image/*"
                      label="Foto"
                      ></v-file-input>
                  </template>
                  <v-col
                  cols="12"
                  sm="6"
                  ><v-overflow-btn
                      class="my-2"
                      :items="pendi"
                      label="Pendidikan"
                      target="#dropdown-example"
                      ></v-overflow-btn>
                      </v-col>
                  <v-text-field
                    label="Pekerjaan"
                  />
                  <v-col
                  cols="12"
                  sm="6"
                  >
                  <v-overflow-btn
                      class="my-2"
                      :items="status"
                      label="Status"
                      target="#dropdown-example"
                      ></v-overflow-btn>
                  </v-col>
                  <v-text-field
                    label="Warga Negara"
                  /><v-text-field
                    label="Status Hidup"
                  />
                </v-col>
                  <v-btn
    class="mr-4"
    @click="submit"
    color="blue"
    >Simpan</v-btn>
    <v-btn
    @click="clear"
    color="error"
    >clear</v-btn>
    </base-material-card>
  </v-container>
</template>

<script>
  export default {
    jk: ['Laki-Laki', 'Perempuan'],
    data: () => ({
    }),
    submit () {
    },
    clear () {},
  }
</script>
