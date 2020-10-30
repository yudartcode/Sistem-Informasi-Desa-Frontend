<template>
  <v-app id="login">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
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
              <v-form @submit.prevent="login">
                <v-card-text>
                  <v-text-field
                    v-model="username"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    type="submit"
                    color="primary"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login () {
        this.$store.dispatch('retriveToken', {
          username: this.username,
          password: this.password,
        })
          .then(response => {
            this.$router.push({ name: 'Dashboard' })
          })
      },
      ...mapActions({
        setAlert: 'alert/set',
      }),
    },
  }
</script>

<style>
