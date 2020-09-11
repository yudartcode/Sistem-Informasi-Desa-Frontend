<template>
  <v-container
    id="icons"
    fluid
    tag="section"
  >

    <base-material-card
      icon="mdi-file"
      class="px-5 py-3"
      title="Visi Misi"
    >

          <v-row
            align="center"
            justify="center"
          >
          <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="Visi Misi : "
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col>
              <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn color="blue">Simpan</v-btn>
                  <v-btn color="error">Batal</v-btn>
                </v-col>
          </v-row>
        </base-material-card>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardIcons',

    data: () => ({
    }),
  }
</script>
