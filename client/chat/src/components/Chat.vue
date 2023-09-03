<template>
    <div class="chat">
        <!-- Componentes -->
        <AccountPanel/>
        <ChatPanel/>
        <ChatListPanel/>
    </div>
</template>
  
<script>

    import ChatPanel from './ChatPanel.vue'
    import ChatListPanel from './ChatListPanel.vue' 
    import AccountPanel from './AccountPanel.vue'

    export default {
    // Código JavaScript aquí
        components: {
            ChatPanel,
            AccountPanel,
            ChatListPanel
        }
    };

</script>
  

<style scoped>
    .chat {
      /* Estilos aquí */
      display: flex;
      width: 90vw;  /* 100% del ancho del viewport */
      height: 90vh; /* 100% de la altura del viewport */
      border: 1px solid blue;
    }
</style>
  