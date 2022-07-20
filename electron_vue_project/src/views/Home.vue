<template>
  <div id="home">
    <div id="greeting">
      {{ $t('main.greeting')}}
      <v-btn
        @click="$router.push('/')" 
        id="logout">
        {{ $t('main.logout')}}
      </v-btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',
    components: {}
  })

</script>


<style>
</style>
