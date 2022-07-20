<template>
  <v-app>
    <v-main>
      <router-link to="/login"></router-link>
      <router-link to="/home"></router-link>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// import { ipcRenderer } from 'electron';
import Vue from 'vue';


export default Vue.extend({
  name: 'App',

  created() {
    // ipcRenderer.on('changeRouteTo', (event:Event, path:string) => {
    //   this.$router.push(path)
    // })
  },

  data: () => ({
    
  }),
});
</script>

<style>

</style>
