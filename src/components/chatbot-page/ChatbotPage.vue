<script setup lang="ts">
import SideBar from './SideBar.vue';
import ChatMenu from './ChatMenu.vue';
import ChatWIndow from './ChatWIndow.vue';
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <ChatMenu />
        <ChatWIndow />
    </div>
    
</template>