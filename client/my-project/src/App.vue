<template>
  <div  class="flex w-screen h-screen"  style="min-width: 800px; overflow-x: auto;">


    <div class="flex flex-col sidebar-background w-36 h-[850px] bg-[#edf6f9]">
      <div id="logo" :style="logoStyle" class="w-full h-24"></div>

      <div class="flex flex-col w-full h-full items-end">

            <!-- <Sidebar/> -->
            <div class="flex flex-col h-[50%] w-full items-center">
              <button class="mb-6 mr-1 mt-5" @mouseover="setHovered('chat')" @mouseout="clearHovered">
                  <Icon size="36" :color="hoveredIcon === 'chat' ? '#61a5c2' : 'black'"> <ChatMultiple20Regular/> </Icon>
              </button>
              <button class="mb-5" @mouseover="setHovered('group')" @mouseout="clearHovered">
                  <Icon size="34" :color="hoveredIcon === 'group' ? '#61a5c2' : 'black'"> <GroupsTwotone/> </Icon>
              </button>
              <button class="mb-5" @mouseover="setHovered('bookmark')" @mouseout="clearHovered">
                  <Icon size="34" :color="hoveredIcon === 'bookmark' ? '#61a5c2' : 'black'"> <BookmarkMultiple28Regular/> </Icon>
              </button>
              <button class="mb-5" @mouseover="setHovered('more')" @mouseout="clearHovered">
                  <Icon size="34" :color="hoveredIcon === 'more' ? '#61a5c2' : 'black'"> <Add/> </Icon>
              </button>
          </div>
            <div class="flex flex-col h-[50%] w-full justify-end items-center">
              <button class="mb-6 mr-1"  @mouseover="setHovered('config')" @mouseout="clearHovered">
                  <Icon size="32" :color="hoveredIcon === 'config' ? '#61a5c2' : 'black'"> <CloudSatelliteConfig/> </Icon>
              </button>
              <button class="mb-5"  @mouseover="setHovered('profile')" @mouseout="clearHovered">
                  <Icon size="34" :color="hoveredIcon === 'profile' ? '#61a5c2' : 'black'"> <UserProfileAlt/> </Icon>
              </button>
          </div>
      </div>

    </div>


    <div class="flex flex-col w-full h-full">
      <div class="flex w-full h-full">


        <div class="flex flex-col w-1/3 h-[850px] bg-[#edf6f9]">
            <div id="main-chat" class="flex w-full">      
              <div class="w-16 h-16 ml-5 mt-5 rounded-fullborder-2 border-black" :style="code"></div>
              <div>
                <h2 class="ml-5 mt-5">Code Chat</h2>
                <p class="ml-5 text-sm">5 Online</p>
              </div>     
            </div>

            <div id="chatOptions" class="flex ml-auto mr-auto mt-7 w-[90%] h-12 border-b-2 ">
              
              <button @click="toggleView(true)" 
                      class="flex cb w-[50%] h-12 border-b-2 border-r-2 justify-center items-center" 
                      :class="{ 'active-button': count, 'inactive-button': !count }">
                  <h3>Chats</h3>
              </button>
              <button @click="toggleView(false)" 
                      class="flex cb w-[50%] h-12 border-b-2  justify-center items-center"
                      :class="{ 'active-button': !count, 'inactive-button': count }">
                <h3>Recent</h3>
              </button>
            </div>
             
            <component :is="currentComponent" />
        </div>

        <div  class="flex flex-col w-2/3 h-[850px] bg-[#edf6f9] p-6">
          <div :style="backgroundStyle" class="h-full border-2 rounded-2xl">
            <Chat/>
          </div>     
        </div>
            
      </div>
    </div>
  </div>

</template>

<script>

import Chat from './components/chat.vue';
import { Icon } from '@vicons/utils'
import { ChatBot, UserProfile, UserProfileAlt, CloudSatelliteConfig, Add } from '@vicons/carbon'
import {  AddCircleOutlineFilled, GroupsTwotone, GroupAddFilled } from '@vicons/material'
import { ChatMultiple20Regular, BookmarkMultiple28Regular } from '@vicons/fluent'
import { ref, computed } from 'vue'
import code from './assets/code.jpg'
import logo from './assets/logo.png'
import bg2 from './assets/bg2.jpg'
import chats from './components/chats.vue'
import recent from './components/recent.vue'


export default {
  
    name: 'App',
    components: { 
      Chat,
      Icon, 
      ChatBot,
      AddCircleOutlineFilled,
      UserProfile,
      UserProfileAlt,
      CloudSatelliteConfig,
      chats,
      recent,
      ChatMultiple20Regular,
      GroupsTwotone,
      GroupAddFilled,
      Add,
      BookmarkMultiple28Regular
      
    },
    
    setup() {
      const count = ref(true);
      const hoveredIcon = ref(null);

      const toggleView = (showChats) => {
          count.value = showChats;
      };

      const currentComponent = computed(() => {
          return count.value ? 'chats' : 'recent';
      });

      const setHovered = (iconName) => {
        hoveredIcon.value = iconName;
      };

      const clearHovered = () => {
        hoveredIcon.value = null;
      };

      return {
          count,
          toggleView,
          currentComponent,
          hoveredIcon,
          setHovered,
          clearHovered
      };
    },

    computed: {
      backgroundStyle() {
        return {
            backgroundImage: `url(${bg2})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
          };
        },
        logoStyle() {
          return {
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
          };
        },

        code() {
          return {
            backgroundImage: `url(${code})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
          };
        },


    },
}

</script>

<style scoped>
 

.sidebar-background {
  box-shadow: 0 5px 22px 0 rgba( 31, 38, 135, 0.38 );
  backdrop-filter: blur( 0px );
  -webkit-backdrop-filter: blur( 0px );
}

.active-button {
  border-bottom-color: #61a5c2;
  color: #61a5c2;
}

/* Estilos para cuando un botón está inactivo */
.inactive-button {
  border-bottom-color: gray; /* o cualquier otro color que desees */
  color: gray; /* o cualquier otro color que desees */
}

.cb {
  transition: color 0.3s ease, border-color 0.3s ease;
}

</style>
