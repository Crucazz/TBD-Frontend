<template>
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="nombre"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Instituciones</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>        
    </template>


    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="goToInstitucion(item.id)"
      >
        mdi-pencil
      </v-icon>          
  </v-data-table>
</template>





<script>
  export default {  

    data(){
        return{
            //Lista de ítems a mostrar
            items:[],
            headers: [
          {
            text: 'ID',
            align: 'start',
            value: 'id',
          },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Descripcion', value: 'descrip' },
        ],
        }
    },
    methods:{
        //Función asíncrona para consultar los datos
        getData: async function(){
            try {
                let response = await this.$http.get('/institucion');
                this.items  = response.data;
                
            } catch (error) {
                console.log('error', error);
            }
        },
        goToInstitucion(id) {
          this.$router.push({name:'InstitucionPorID',params:{id:id}})
        }
    },
    //Función que se ejecuta al cargar el componente
    created:function(){
        this.getData();
    }

  }
</script>