<template>
  <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <v-carousel cycle height="400">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"            
          ></v-carousel-item>
        </v-carousel>
        
          Platorma de voluntariado para diversas emergencias, en distintas zonas de Chile
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data () {
      return {
        items: [
          {
            src: 'https://richmondvale.org/images/what-we-do/releaf-aid.jpg',
          },
          {
            src: 'https://www.atentos.cl/wp-content/uploads/2017/01/FEUCM-SE-MOVILIZA-POR-INCENDIOS-FORESTALES-2.jpg',
          },
          {
            src: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2017/03/29/000413355W.jpg',
          },
          {
            src: 'https://www.chillanonline.cl/V5/wp-content/uploads/2020/04/ae124dcb-554c-48fe-9a04-c086912900fd.jpg',
          },

          {
            src: 'https://www.tuexperto.com/wp-content/uploads/2017/02/huaycos.jpg',
          },
        ],
      }
    }
  }
</script>
