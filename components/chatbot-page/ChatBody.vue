<script setup lang="ts">
import { motion } from 'motion-v';
import ChatMessage from './ChatMessage.vue';

</script>

<template>
  <motion.div 
    class="absolute bg-gradient-to-b from-cyan-100/90 via-cyan-100/80 to-white overflow-y-auto w-full h-full py-28 px-6"
  >
    <div class="max-w-3xl mx-auto">
      <ChatMessage role="user" content="lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat ipsum qui inventore ab eveniet placeat provident repellat, architecto nulla nam hic odio at eos aperiam cum illum quisquam dolorem." />
      <ChatMessage role="bot" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat ipsum qui inventore ab eveniet placeat provident repellat, architecto nulla nam hic odio at eos aperiam cum illum quisquam dolorem." />
    </div>
  </motion.div>
</template>

