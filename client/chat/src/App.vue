<template>
  <v-app>
    <v-main>

      <div class="Main">
            <Chat/>
      </div>

    </v-main>
  </v-app>
</template>

<script>

import Chat from './components/Chat.vue'

export default {
  name: 'App',

  components: {
    Chat
  },

  data: () => ({
    //
  }),
}
</script>



<style>

  .Main {
    display: flex;
    justify-content: center; /* Centrado horizontal */
    align-items: center;     /* Centrado vertical */
    width: 100vw;  /* 100% del ancho del viewport */
    height: 100vh;
    border: 1px solid blue;
  }

</style>