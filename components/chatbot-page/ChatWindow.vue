<script setup lang="ts">
import ChatNavbar from './ChatNavbar.vue';
import ChatInput from './ChatInput.vue';
import ChatBody from './ChatBody.vue';

import { type IMessage } from '~/types/message.type';

const messages = ref<IMessage[]>([]);

const route = useRoute();

onMounted(() => {
  const queryPrompt = route.query.prompt
  if (typeof queryPrompt === 'string') {
    handleSendMessage(queryPrompt)
  }
})

const handleSendMessage = (prompt: string) => {
  if (!prompt) return;

  const newUserMessage: IMessage = {
    role: 'user',
    content: prompt
  }
  messages.value.push(newUserMessage);

  const newBotMessage: IMessage = {
    role: 'bot',
    content: 'Maaf fitur ini belum tersedia.'
  }
  messages.value.push(newBotMessage);
}
</script>

<template>
  <div class="relative flex flex-col w-full h-screen">
    <ChatNavbar />
    
    <ChatBody :messages="messages" />
    
    <ChatInput @send-message="handleSendMessage"/>
  </div>
</template>
