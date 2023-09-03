<template>
    <div class="chat-panel">

            <MessageList/>
            
        <div>
            <MessageInput/>
        </div>
    </div>
</template>
  
<script>



import Chatbar from './helpers/ChatBar.vue'
import MessageList from './helpers/MessageList.vue'
import MessageInput from './helpers/Messageinput.vue'

  export default {
    // Tu código JavaScript aquí
    components: {
        MessageInput,
        MessageList,
        Chatbar
    },

    data() {
            return {
            roomName: 'Sala General',
            messages: [ 
                { id: 1, text: 'Hola, ¿cómo estás?', sender: 'Juan' },
                { id: 2, text: 'Bien, ¿y tú?', sender: 'Ana' }
            ],
            users: [
                { id: 1, name: 'Juan' },
                { id: 2, name: 'Ana' }
            ]
            };
    },

    // created(){
    //     console.log(this.messages)
    // }
  };

</script>
  
<style scoped>
    .chat-panel {
      /* Estilos aquí */
      height: 100%;  /* Ancho completo */
      width: 48%;
      border: 1px  solid yellow;
      display: flex;
      flex-direction: column; /* Columna para alinear verticalmente */
      justify-content: flex-end; /* Alinea al final del contenedor */
      border-bottom: 1px solid black;
    }
</style>