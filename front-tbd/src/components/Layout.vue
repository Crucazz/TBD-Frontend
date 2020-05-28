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
        <router-link to="/api/v1/institutions">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Instituciones</v-list-item-title>
            </v-list-item-content>
          </v-list-item>    
        </router-link>
        <router-link to="/api/v1/volunteers">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Voluntarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>    
        </router-link>
        <router-link to="/api/v1/abilities">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Habilidades</v-list-item-title>
            </v-list-item-content>
          </v-list-item>    
        </router-link>
        <router-link to="/api/v1/new/volunteer">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Agregar Voluntario</v-list-item-title>
            </v-list-item-content>
          </v-list-item>    
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>      
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