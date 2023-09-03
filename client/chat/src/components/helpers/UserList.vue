
<template>
    <v-list>
        <v-list-item v-for="user in users" :key="user.id">
          <v-list-item-title>
            {{ user.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
  </template>
  
  <script>


  export default {
    props: ['users']
  };
  </script>
  
  <style>
  /* Tu código CSS aquí */
  </style>
  