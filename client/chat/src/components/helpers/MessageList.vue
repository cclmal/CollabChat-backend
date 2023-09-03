<template>
    <v-container class="container">
        <div class="message" v-for="message in messages" :key="message.id">
          {{ message.text }}
        </div>
    </v-container>
  </template>
  
  <script>
  export default {
    props: ['messages'],

    ver(){
      console.log(this.messages)
    }
  };
  </script>

  <style scoped>

    .message {
      background-color: blue;
    }

    .container {
  /* Asegura que ocupe todo el espacio vertical disponible */
      height: 100%;
      border: 2px solid red;
    }

  </style>