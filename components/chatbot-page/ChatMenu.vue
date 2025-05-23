<script setup lang="ts">
import { motion } from 'motion-v';
import ChatCollapse from './ChatCollapse.vue';
</script>

<template>
  <motion.div 
    :initial="{ opacity: 0, y: -40 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8, easing: 'easeOut' }"
    class="w-82 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-xl"
  >
    <motion.header
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ delay: 0.3, duration: 1 }"
      class="relative w-full h-20 flex justify-between items-center px-6 bg-gradient-to-r from-cyan-500 to-blue-500 "
    >
      <motion.div
        :while-hover="{ scale: 1.1, rotate: 2 }"
        :transition="{ type: 'spring', stiffness: 300 }"
        class="flex-shrink-0 flex relative"
      >
        <img src="/logo.png" alt="Symp Logo" class="w-24 drop-shadow-xl" />
      </motion.div>
    </motion.header>

    <ChatCollapse @select-collapse="(collapseName: string) => $emit('select-collapse', collapseName)" />
  </motion.div>
</template>
