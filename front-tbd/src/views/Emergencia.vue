<template>
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="nombre"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Emergencias</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>      
    </template>

    <template v-slot:item.idInstitution="{ item }">      
      <div v-for="inst in instituciones" v-bind:key="inst.id">
        <div v-if="inst.id === item.idInstitution">
            {{inst.name}}
        </div>      
        
        
      </div>

    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="goToVoluntariosPorEmergencia(item)"
      >
        Voluntarios
      </v-icon>
    </template>
  </v-data-table>
</template>





<script>
  export default {  

    data(){
        return{
            //Lista de ítems a mostrar
            items:[],
            instituciones:[],
            headers: [          
          { text: 'Nombre',align: 'start', value: 'name' },
          { text: 'Institucion', value: 'idInstitution' },
          { text: 'Descripcion', value: 'description' },          
          { text: 'Fecha inicio', value: 'startDate' },
          { text: 'Fecha termino', value: 'finishDate' },
          { text: 'Acciones', value: 'actions', sortable: false },
        ],
        }
    },
    methods:{
        //Función asíncrona para consultar los datos
        getData1: async function(){
            try {
                let response = await this.$http.get('/api/v1/emergencies');
                this.items  = response.data;                

                
            } catch (error) {
                console.log('error', error);
            }
        },
        //Función asíncrona para consultar los datos
        getData2: async function(){
            try {
                let response = await this.$http.get('/api/v1/institutions');
                this.instituciones  = response.data;                
            } catch (error) {
                console.log('error', error);
            }
        },        
        goToVoluntariosPorEmergencia(item) {
          this.$router.push({name:'VoluntariosPorEmergencia', params:{id:item.id}});
        },
    },
    //Función que se ejecuta al cargar el componente
    created:function(){
        this.getData1();
        this.getData2();
    }

  }
</script>