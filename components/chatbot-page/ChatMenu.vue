<script setup lang="ts">
import { motion } from 'motion-v';

import ChatCollapse from './ChatCollapse.vue';

</script>

<template>
  <motion.div 
    :initial="{ opacity: 0, y: -100 }"
    :animate="{ opacity: 1, y: 0 }"
    class="w-82 flex-shrink-0 bg-white"
  >
    <header class="w-full bg-cyan-500 h-20 flex justify-between items-center px-8 rounded-t-lg">
      <h2 class="font-semibold text-xl text-white">Aeglen</h2>
      <div class="flex-shrink-0 w-14 h-14 relative">
        <img src="/logo2.png" alt="Avatar" class="w-full h-full bg-base-100 border-2 border-cyan-700 rounded-full">
      </div>
    </header>

    <ChatCollapse @select-collapse="(collapseName: string) => $emit('select-collapse', collapseName)"/>
  </motion.div>
</template>
