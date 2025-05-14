<script setup lang="ts">
import ChatNavbar from './ChatNavbar.vue';
import ChatInput from './ChatInput.vue';
import ChatBody from './ChatBody.vue';

</script>

<template>
  <div class="relative flex flex-col w-full h-screen overflow-hidden">
    <ChatNavbar />

    <ChatBody />

    <ChatInput />
    
  </div>
</template>
