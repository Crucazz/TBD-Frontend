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
          { text: 'id_instituion', value: 'idInstitution' },
          { text: 'Descripcion', value: 'description' },          
          { text: 'Fecha inicio', value: 'startDate' },
          { text: 'Fecha termino', value: 'finishDate' },
          { text: 'Acciones', value: 'actions', sortable: false },
        ],
        }
    },
    methods:{
        //Función asíncrona para consultar los datos
        getData: async function(){
            try {
                let response = await this.$http.get('/api/v1/emergencies');
                this.items  = response.data;

                let response2 = await this.$http.get('/api/v1/institutions');
                this.instituciones  = response2.data;

                for (var i = 0; i < this.items.length; i++) 
                {
                  for (var j = 0; j < this.instituciones.length; j++) 
                  {
                    if(this.items.idInstitution[i]==this.instituciones.id[j])
                    {
                      this.items.idInstitution[i]=this.instituciones.name[j];
                      j=this.instituciones.length;
                    }
                  }
                }
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
        this.getData();
    }

  }
</script>