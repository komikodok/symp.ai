<script setup lang="ts">
import { motion } from 'motion-v';

</script>

<template>
  <section class="relative w-full h-[32rem] overflow-hidden bg-gradient-to-br from-cyan-500 to-sky-600">
    <div class="absolute w-[80%] h-96 top-1/2 -left-82 bg-gradient-to-r from-cyan-400 via-sky-400 rotate-45 opacity-80"></div>
    <div class="absolute w-52 h-52 top-28 right-32 rounded-full bg-gradient-to-tl from-sky-600 to-cyan-500"></div>
    <div class="absolute w-96 h-96 -bottom-28 -right-20 rounded-full bg-gradient-to-tl from-sky-600 to-cyan-500"></div>
    
    <div class="relative z-10 container mx-auto px-6 h-full flex flex-col gap-9 justify-center">
      <div class="max-w-2xl">
        <motion.h1
          :initial="{ opacity: 0, x: -100 }"
          :animate="{ opacity: 1, scale: 1, x: 0 }"
          :transition="{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
          }"
          class="text-5xl font-extrabold text-white mb-6 leading-tight">Layanan Kami
        </motion.h1>
        <motion.p 
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, scale: 1, y: 0}"
          :transition="{
            delay: 1
          }"
          class="text-lg font-semibold text-white opacity-90">Temukan berbagai layanan kesehatan berbasis AI untuk mendukung kesehatan Anda secara instan.
        </motion.p>
      </div>
      <motion.button 
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1, scale: 1}"
        :transition="{ duration: 1 }"
        class="relative btn w-60 hover:bg-indigo-100 active:bg-indigo-100 border-none shadow-none rounded-full"
      >
        <span class="text-cyan-600 text-lg font-bold">Lihat Fitur</span>
      </motion.button>
    </div>

    <div class="absolute bottom-0 translate-y-5 right-0 w-82 h-82 mx-3">
      <img 
          class="object-contain scale-120 rounded-full pointer-events-none p-2" 
          src="/1.png" 
          alt="Avatar" 
          draggable="false"
      />
    </div>
  </section>
</template>
