<template>
    <v-text-field label="Escribe un mensaje..." @keyup.enter="sendMessage" />
  </template>
  
  <script>
  export default {
    methods: {
      sendMessage() {
        // Lógica para enviar el mensaje
      }
    }
  };
  </script>