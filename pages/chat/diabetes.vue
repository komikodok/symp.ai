<script setup lang="ts">
import ChatSidebar from '~/components/chatbot-page/ChatSidebar.vue';
import ChatMenu from '~/components/chatbot-page/ChatMenu.vue';
import ChatWindow from '~/components/chatbot-page/ChatWindow.vue';

const collapseName = ref<string>("Diabetes");

provide('collapseName', collapseName);

</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <ChatSidebar />
        <ChatMenu @select-collapse="(name: string) => collapseName = name" />
        <ChatWindow />
    </div>
</template>