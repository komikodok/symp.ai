<script setup lang="ts">
import { motion } from 'motion-v';

import ChatCollapse from './ChatCollapse.vue';

const carouselName = ref<string>("");
</script>

<template>
  <motion.div 
    :initial="{ y: -100, opacity: 0}"
    :animate="{ y: 0, opacity: 1}"
    class="w-82 flex-shrink-0 max-lg:w-full bg-white"
  >
    <header class="w-full bg-cyan-500 h-42 lg:h-20 flex justify-center items-center px-8 rounded-t-lg">
      <h2 class="font-semibold text-5xl lg:text-xl text-white">{{ carouselName && "Spesialis" }} {{ carouselName }}</h2>
    </header>

    <ChatCollapse @select-carousel="(name: string) => carouselName = name"/>
  </motion.div>
</template>
