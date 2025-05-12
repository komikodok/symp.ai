<script setup lang="ts">
import SideBar from './SideBar.vue';
import ChatMenu from './ChatMenu.vue';
import ChatWindow from './ChatWindow.vue';
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <ChatMenu />
        <ChatWindow />
    </div>
</template>