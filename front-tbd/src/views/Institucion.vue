<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    item-key="name"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  ></v-data-table>

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

        

    },
    //Función que se ejecuta al cargar el componente
    created:function(){
        this.getData();
    }

  }
</script>