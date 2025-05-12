<script setup lang="ts">
import { motion } from 'motion-v';

const { openModal } = defineProps<{
    openModal: boolean
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <section v-if="openModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div @click="emit('close')" class="absolute inset-0 bg-black opacity-50"></div>

    <motion.div 
      :initial="{ scale: 0, opacity: 0 }"
      :animate="{ scale: [0, 1], opacity: [0, 1] }"
      :transition="{ duration: 0.3 }"
      class="relative bg-white p-6 md:px-9 rounded-xl shadow-xl z-60 w-[38rem] lg:w-[52rem] max-h-[90vh] overflow-y-auto"
    >
      <div class="grid grid-cols-4 lg:grid-cols-6 gap-7">
        <div class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-cyan-100 to-blue-400 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/diabetes-test.png" alt="Diabetes">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Diabetes
          </p>
        </div>
        <div class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-pink-100 to-pink-400 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/cancer-cell.png" alt="Kanker">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Kanker
          </p>
        </div>
        <div class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-zinc-100 to-zinc-500 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/asthmatic.png" alt="Asma">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Asma
          </p>
        </div>
        <div class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/dermatology.png" alt="Kulit">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Penyakit Kulit
          </p>
        </div>
        <div class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-rose-200 to-rose-400 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/hearth.png" alt="Jantung">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Penyakit Jantung
          </p>
        </div>
        <div class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-red-300 to-red-500 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/blood-pressure.png" alt="Jantung">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Darah Tinggi
          </p>
        </div>
        <div class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-orange-200 to-orange-400 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/cholesterol.png" alt="Jantung">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Kolesterol
          </p>
        </div>
        <div @click="emit('close')" class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br rounded-xl mb-4 flex items-center justify-center">
            <img src="/previous.png" alt="Jantung">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Kembali
          </p>
        </div>
      </div>
    </motion.div>
  </section>
</template>