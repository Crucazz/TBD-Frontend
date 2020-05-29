<template>
  <v-app id="inspire">
    
    <layout />

  <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            
                  
                  
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      color="green lighten-1"
      app
    >
      <span class="white--text">&copy; 2020 Taller de base de datos</span>
    </v-footer>


  </v-app>
</template>

<script>

import Layout from './components/Layout.vue'

export default {
  name: 'App',

  components: {
    Layout
  },

  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
};
</script>