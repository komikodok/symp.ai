<script setup lang="ts">
import { motion } from 'motion-v';
import ChatMessage from './ChatMessage.vue';
import { type IMessage } from '~/types/message.type';

const { messages } = defineProps<{
  messages: IMessage[]
}>();

const endMessage = useTemplateRef<(HTMLDivElement)>('end-message');

onMounted(() => {
  endMessage.value?.scrollIntoView({ behavior: 'smooth', block: 'end' });
});

watch(() => messages, () => {
  endMessage.value?.scrollIntoView({ behavior: 'smooth', block: 'end' });
}, { deep: true })
</script>

<template>
  <motion.div 
    class="absolute bg-gradient-to-b from-cyan-100/90 via-cyan-100/80 to-white overflow-y-auto w-full h-[95%] py-28 px-6"
  >
    <div class="max-w-3xl mx-auto">
      <div v-for="(message, index) in messages">
        <ChatMessage :key="index" :role="message.role" :content="message.content"/>
      </div>
      <div ref="end-message" class="h-52" />
    </div>
  </motion.div>
</template>

