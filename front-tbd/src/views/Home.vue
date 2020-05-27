<template>
  <div class="home">
    <HelloWorld msg="Bienvenido al Himalaya,¿Helado?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
