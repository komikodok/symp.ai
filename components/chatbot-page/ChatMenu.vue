<script setup lang="ts">
import { motion } from 'motion-v';

import ChatCollapse from './ChatCollapse.vue';
import { ref } from 'vue';

const carouselName = ref<string>("");
</script>

<template>
  <motion.div 
    :initial="{ opacity: 0, y: -100 }"
    :animate="{ opacity: 1, y: 0 }"
    class="w-82 flex-shrink-0 bg-white"
  >
    <header class="w-full bg-cyan-500 h-20 flex justify-between items-center px-8 rounded-t-lg">
      <h2 class="font-semibold text-xl text-white">Spesialis {{ carouselName }}</h2>
      <div class="flex-shrink-0 rounded-lg bg-sky-100 w-14 h-14 relative">
        <img src="/1.png" alt="Avatar" class="w-full h-full rounded-full">
      </div>
    </header>

    <ChatCollapse @select-carousel="(name: string) => carouselName = name"/>
  </motion.div>
</template>
