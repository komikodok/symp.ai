<script setup lang="ts">
import { motion } from 'motion-v';

import ChatCollapse from './ChatCollapse.vue';
</script>

<template>
  <motion.div 
    :initial="{ y: -100, opacity: 0}"
    :animate="{ y: 0, opacity: 1}"
    class="w-82 max-lg:w-full bg-white shadow-md rounded-b-lg"
  >
    <header class="w-full bg-cyan-500 h-32 lg:h-20 flex justify-between items-center px-4 rounded-t-lg">
      <h2 class="font-semibold text-3xl lg:text-xl text-white">Aeglen</h2>
      <div class="indicator rounded-lg bg-sky-100 w-24 h-24 lg:w-14 lg:h-14 relative">
        <span class="indicator-item indicator-top status status-lg status-success"></span>
        <img src="/1.png" alt="Avatar" class="w-full h-full rounded-full">
      </div>
    </header>

    <ChatCollapse />
  </motion.div>
</template>
