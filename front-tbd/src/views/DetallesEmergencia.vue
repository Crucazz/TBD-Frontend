<template>
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="nombre"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Detalles emergencia</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>      
    </template>
          
  </v-data-table>
</template>





<script>
  export default {  

    data(){
        return{
            //Lista de ítems a mostrar
            items:[],
            headers: [
          { text: 'Nombre',align: 'start', value: 'name' },
          { text: 'Descripcion',align: 'start', value: 'description' },
          { text: 'Voluntarios requeridos',align: 'start', value: 'requiredVolunteers' },
          { text: 'Voluntarios inscritos',align: 'start', value: 'enrolledVolunteers' },
          { text: 'Fecha inicio',align: 'start', value: 'startDate' },
          { text: 'Fecha termino',align: 'start', value: 'finishDate' },          
        ],
        }
    },
    methods:{
        //Función asíncrona para consultar los datos
        getData: async function(){
            try {
                let response = await this.$http.get('/api/v1/tasks');
                this.items  = response.data;
                
            } catch (error) {
                console.log('error', error);
            }
        },
    },
    //Función que se ejecuta al cargar el componente
    created:function(){
        this.getData();
    }

  }
</script>