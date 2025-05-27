<script setup lang="ts">
import { ref, watch } from 'vue';
import SpecialistModal from './SpecialistModal.vue';
import { MotionValue, motion, useTransform } from 'motion-v';

const { scrollYProgress } = defineProps<{
  scrollYProgress: MotionValue<number>
}>();

const opacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [0, 1, 0]);

const openModal = ref<boolean>(false);

watch(openModal, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

<template>
  <motion.section 
    :style="{ opacity }" 
    class="relative max-w-7xl mx-auto p-6 mb-32 md:px-9 overflow-hidden"
  >

    <div class="p-6 my-10 rounded-xl bg-white shadow-xl">
      <h1 class="text-4xl text-cyan-700 font-extrabold mb-8 drop-shadow">
        Spesialis
      </h1>

      <div class="grid grid-cols-3 lg:grid-cols-6 gap-6">
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
        <div @click="openModal = true" class="p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer grid grid-cols-2 p-1 mask mask-hexagon-2 mb-4 items-center justify-center">
            <div class="w-7 h-7 bg-sky-300 rounded-md m-auto"></div>
            <div class="w-7 h-7 bg-cyan-300 rounded-md m-auto"></div>
            <div class="w-7 h-7 bg-cyan-300 rounded-md m-auto"></div>
            <div class="w-7 h-7 bg-sky-300 rounded-md m-auto"></div>
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Lihat Semua
          </p>
        </div>
      </div>
    </div>

  </motion.section>

  <SpecialistModal :open-modal="openModal" @close="openModal = false"/>
</template>