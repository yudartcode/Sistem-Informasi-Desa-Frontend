<template>
  <v-container
    id="kk"
    fluid
    tag="section"
  >
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <base-material-card
          icon="mdi-account"
          class="px-5 py-3"
          title="Login"
        >
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary">
              Login
            </v-btn>
          </v-card-actions>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardPenduduk',

    data: () => ({
    }),
  }
</script>
