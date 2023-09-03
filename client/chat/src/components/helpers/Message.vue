<template>
  <v-container>
    <div v-for="message in messages" :key="message.id">
      {{ message.text }}
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['messages']
};
</script>