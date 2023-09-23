<template>

    <div class="w-full h-full">
        <div class="flex flex-col space-y-4 w-full h-full">
            <button class="flex items-center w-[90%] h-16 border-b-2 ml-auto mr-auto mt-[30px] hover:border-[#61a5c2] transition-colors duration-300 ease-in-out">
                <div class="rounded-full ml-5 w-10 h-10" :style="code"></div>
                <h2 class="ml-5 font-bold">Code Chat</h2>
            </button>
            <button class="flex items-center w-[90%] h-16 border-b-2 ml-auto mr-auto mt-[30px] hover:border-[#61a5c2] transition-colors duration-300 ease-in-out">
                <div class="rounded-full ml-5 w-10 h-10" :style="friends"></div>
                <h2 class="ml-5 font-bold">Friends</h2>
            </button>
            <button class="flex items-center w-[90%] h-16 border-b-2 ml-auto mr-auto mt-[30px] hover:border-[#61a5c2] transition-colors duration-300 ease-in-out">
                <div class="rounded-full ml-5 w-10 h-10" :style="mistery"></div>
                <h2 class="ml-5 font-bold">Mistery</h2>
            </button>
            <button class="flex items-center w-[90%] h-16 border-b-2 ml-auto mr-auto mt-[30px] hover:border-[#61a5c2] transition-colors duration-300 ease-in-out">
                <div class="rounded-full ml-5 w-10 h-10" :style="anime"></div>
                <h2 class="ml-5 font-bold">Anime</h2>
            </button>
            <button class="flex items-center w-[90%] h-16 border-b-2 ml-auto mr-auto mt-[30px] hover:border-[#61a5c2] transition-colors duration-300 ease-in-out">
                <div class="rounded-full ml-5 w-10 h-10" :style="music"></div>
                <h2 class="ml-5 font-bold">Music</h2>
            </button>                 
        </div>
      </div>


</template>


<script>

import friends from '../assets/friends.jpg'
import mistery from '../assets/mistery.jpg'
import anime from '../assets/anime.jpg'
import music from '../assets/music.jpg'
import code from '../assets/code.jpg'



export default {


    name: 'Chats',



    computed: {
        friends() {
        return {
            backgroundImage: `url(${friends})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
        };
        },
        mistery() {
        return {
            backgroundImage: `url(${mistery})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
        };
        },

        anime() {
        return {
            backgroundImage: `url(${anime})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center' 
        };
        },
        music() {
        return {
            backgroundImage: `url(${music})`,
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
</style>