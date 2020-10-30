<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-three-dot
      </v-icon>

      <v-icon v-else>
        mdi-view-quilt
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ml-2"
          min-width="0"
          v-bind="attrs"
          text
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          link
        >
          <v-list-item-content v-on="item.to">
            <v-list-item-action>
              <v-icon v-text="item.icon" />
            </v-list-item-action>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        { title: 'Profil', icon: 'mdi-account', to: '' },
        { title: 'Logout', icon: 'mdi-logout', to: 'auth/logout' },
      ],
    }),
    computed: {
      ...mapState(['drawer']),
      loggedIn () {
        return this.$store.getters.loggedIn
      },
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
