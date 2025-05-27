<script setup lang="ts">
import ChatSidebar from '~/components/chatbot-page/ChatSidebar.vue';
import ChatMenu from '~/components/chatbot-page/ChatMenu.vue';
import ChatWindow from '~/components/chatbot-page/ChatWindow.vue';

</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <ChatSidebar />
        <ChatMenu />
        <ChatWindow />
    </div>
</template>