<template>
    <div>
        <ChatBar :roomName="roomName" />
        <MessageList :messages="messages" />
        <UserList :users="users" />
        <MessageInput />
      </div>
</template>
  

<script>

    import ChatBar from './ChatBar.vue';
    import MessageList from './MessageList.vue';
    import UserList from './UserList.vue';
    import MessageInput from './Messageinput.vue';

    export default {
        // Tu código JavaScript aquí
            components: {
                ChatBar,
                MessageList,
                UserList,
                MessageInput
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
        }
    };

</script>
  
<style>
/* Tu código CSS aquí */
</style>
  