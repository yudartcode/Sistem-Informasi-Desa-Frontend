<template>
  <v-container
    id="perangkatdesa"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="Input Perangkat Desa"
      class="px-5 py-3"
    >
      <v-col
        sm="6"
      >
        <v-text-field
          label="Nama Kades"
        />
        <v-col
          sm="4"
        >
          <v-text-field
            label="Masa Jabatan"
          />
        </v-col>
        <v-text-field
          label="Telpon"
        />
        <v-btn color="blue">
          Simpan
        </v-btn>
        <v-btn color="error">
          Batal
        </v-btn>
      </v-col>
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
