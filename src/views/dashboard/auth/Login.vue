<template>
  <v-app id="login">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <alert />
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
                    :rules="rules"
                  />

                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :rules="rules"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    type="submit"
                    color="primary"
                    :disabled="loading"
                  >
                    <div
                      v-if="loading"
                    >
                      <div
                        disabled
                      />
                      Loading...
                    </div>
                    <div
                      v-if="!loading"
                    >
                      <div
                        disabled
                      />
                      Login
                    </div>
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
    components: {
      Alert: () => import('../components/core/Alert.vue'),
    },
    data () {
      return {
        username: '',
        password: '',
        loading: false,
        serverError: '',
        rules: [
          value => !!value || 'Required.',
          value => (value && value.length >= 3) || 'Min 3 characters',
        ],
      }
    },
    methods: {
      login () {
        this.loading = true
        this.$store.dispatch('retriveToken', {
          username: this.username,
          password: this.password,
        })
          .then(response => {
            this.loading = false
            console.log(response.data)
            if (response.data.success === true) {
              this.$router.push({ name: 'Dashboard' })
            } else if (response.data.success === false) {
              this.setAlert({
                status: true,
                color: 'warning',
                text: 'User atau password salah!',
              })
            }
          })
          .catch(error => {
            this.loading = false
            this.serverError = error.response.data
            this.password = ''
          })
      },
      ...mapActions({
        setAlert: 'alert/set',
      }),
    },
  }
</script>

<style>
