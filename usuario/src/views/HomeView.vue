<template>
  <body>
    <div class="home">
      <HelloWorld />
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
body{
  

  
}

hr{
  border: 1px solid #0af;
}

</style>
