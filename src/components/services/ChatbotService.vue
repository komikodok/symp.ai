<script setup lang="ts">
import { ref, watch } from 'vue';
import { motion } from 'motion-v';

import SpecialistModal from '../landing-page/SpecialistModal.vue';
import Loading from './Loading.vue';
import Carousel from './Carousel.vue';

const openModal = ref<boolean>(false);

watch(openModal, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
const isLoading = ref(false);
</script>


<template>
  <div class="h-full relative">
    <Loading :is-loading="isLoading" @update-loading="(state: boolean) => isLoading = state" />

    <motion.h2
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{
        delay: 2.2,
        duration: 0.8
      }"
      class="p-8 max-w-5xl lg:p-5 font-medium text-slate-700 mx-auto text-center text-xl space-y-6"
    >
      “Konsultasikan pertanyaan medis Anda secara instan dengan AI, didukung oleh dokumen, jurnal, karya ilmiah medis terkait.
      Chatbot ini dapat membantu menjawab pertanyaan seputar kesehatan umum, gejala penyakit, dan rekomendasi awal.“
    </motion.h2>
  </div>
    
  <Carousel />
  
  <motion.h2 
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{
      delay: 2.2,
      duration: 0.8
    }"
    @click="openModal = true"
    class="mx-20 flex gap-1 justify-end items-center text-gray-500 font-medium cursor-pointer m-3"
  >
    Lihat Semua
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  </motion.h2>

  <SpecialistModal :open-modal="openModal" @close="openModal = false"/>
  
</template>
