<template>
    <div>
    <h1>{{this.$route.path}}</h1>
    <ul class="item-list">
      <li v-for="(item, index) in items" :key="index">
       <!-- <img :src="'https://loremflickr.com/160/120/dog?lock='+i"/>-->
        {{item}}
      </li>
    </ul>
    <div v-if="items.length==0" class="empty-list">
      <em>No se han cargado los datos</em>
    </div>
  </div>
</template>
<script>
export default {
    //Función que contiene los datos del componente
    data(){
        return{
            //Lista de ítems a mostrar
            items:[]
        }
    },
    methods:{
        //Función asíncrona para consultar los datos
        getData: async function(){
            try {
                let response = await this.$http.get(this.$route.path);
                this.items  = response.data;
            } catch (error) {
                console.log('error', error);
            }
        }
    },
    //Función que se ejecuta al cargar el componente
    created:function(){
        this.getData();
    }
}
</script>