<template>
    <v-app-bar>
      <v-toolbar-title>
        {{ roomName }}
      </v-toolbar-title>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    props: ['roomName']
  };
  </script>