<template>
  <v-container
    id="icons"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Icons"
      link="components/icons"
    />

    <v-row>
      <v-col cols="12">
        <base-material-card color="green">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Visi Misi
            </div>
          </template>

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
                  <v-btn color="secondary">Simpan</v-btn>
                  <v-btn color="error">Batal</v-btn>
                </v-col>
          </v-row>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardIcons',

    data: () => ({
    }),
  }
</script>
