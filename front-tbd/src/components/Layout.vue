<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>      

        <router-link to="/api/v1/search/volunteers">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Buscar Voluntario</v-list-item-title>
            </v-list-item-content>
          </v-list-item>            
        </router-link>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>      
      <v-toolbar-title>Ayuda en emergencias, Ayuda a Chile</v-toolbar-title>
    </v-app-bar>


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
              <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>



  </v-app>








</template>    

<script>

export default {
  name: 'App',

  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
};
</script>