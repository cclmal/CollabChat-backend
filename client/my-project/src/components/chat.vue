<template>
    <div class="flex flex-col w-full h-full p-4 rounded-2xl shadow-2xl chat-background" >
  
      <div class="flex-grow overflow-y-auto mb-4">
        <ul>
            <li v-for="message in messages" :key="message.id" :class="message.sentByMe ? 'flex justify-end' : 'flex justify-start'">
                <div v-if="!message.sentByMe" class="w-6 h-6 mx-2 bg-gray-400 rounded-full" :style="kitty"></div> <!-- Círculo a la izquierda para mensajes recibidos -->
                <span 
                    class="inline-block max-w-[70%] py-2 px-4 my-1 rounded-lg" 
                    :class="{
                        'bg-blue-500 text-white': message.sentByMe,
                        'bg-[#edf2f4]': !message.sentByMe
                    }"
                >
                    {{ message.text }}
                </span>
                <div v-if="message.sentByMe" class="w-6 h-6 mx-2 bg-gray-400 rounded-full" :style="doggy"></div> <!-- Círculo a la derecha para mensajes enviados por mí -->
            </li>
        </ul>
        
      </div>
  
      <div class="flex h-14 border-t bg-[#edf6f9] border-gray-300 border-2  rounded-2xl">

          <input class="flex-grow px-4 py-2 outline-none  rounded-2xl" placeholder="Type..." v-model="newMessage" @keyup.enter="sendMessage">
          
          <button class="w-10 rounded-r-lg focus:outline-none" @click="sendMessage">
            <div class="mt-1 ">
                <Icon  size="20" color="black"><Link/></Icon>
            </div>      
          </button>

          <button class="w-10 rounded-r-lg focus:outline-none" @click="sendMessage">
            <div class="mt-1">
                <Icon  size="20" color="black"><EmojiEmotionsOutlined/></Icon>
            </div>      
          </button>

          <button class="w-10 mr-2 rounded-r-lg focus:outline-none" @click="sendMessage">
            <div class="mt-1">
                <Icon  size="20" color="black"><SendAlt/></Icon>
            </div>      
          </button>

      </div>
    </div>
  </template>
  
  <script>
  import { ref, inject } from 'vue';
  import { socketSymbol } from '../main'; 
  import { Icon } from '@vicons/utils';
  import { SendAlt, Link } from '@vicons/carbon'
  import { EmojiEmotionsOutlined, AddCircleOutlineFilled } from '@vicons/material'
  import dogProfile from '../assets/dogProfile.jpg'
  import catProfile from '../assets/catProfile.jpg'
    
  
  export default {
    name: 'Chat',
    components: {
      Icon,
      SendAlt,
      Link,
      EmojiEmotionsOutlined,
      AddCircleOutlineFilled
    },
    setup() {
      const socket = inject(socketSymbol); // Inyectamos el socket
      const messages = ref([]);
      const newMessage = ref('');
  
      socket.on('chat message', (msg) => {
            messages.value.push({ 
                id: messages.value.length + 1, 
                text: msg,
                sentByMe: false
            });
    });
  
      const sendMessage = () => {
            if (newMessage.value.trim() !== '') {
                const message = {
                    id: messages.value.length + 1,
                    text: newMessage.value,
                    sentByMe: true
                };
                messages.value.push(message);
                console.log(messages)
                socket.emit('chat message', newMessage.value);
                newMessage.value = '';
            }
        };
  
      return {
        messages,
        newMessage,
        sendMessage
      };
    },
    computed: {
        kitty() {
        return {
            backgroundImage: `url(${catProfile})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
        };
        },
        doggy() {
        return {
            backgroundImage: `url(${dogProfile})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
        };
        }       
        },
  }
  </script>
  
  <style scoped>
  

  .chat-background {
    box-shadow: 0 5px 22px 0 rgba( 31, 38, 135, 0.38 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
  }

  </style>