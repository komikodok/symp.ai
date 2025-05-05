<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';

import Loading from './Loading.vue';
import SpecialistCard from './SpecialistCard.vue';

const isLoading = ref<boolean>(false);
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

    <div class="flex justify-center my-20">
        <div class="carousel carousel-center space-x-7 p-4 max-w-3xl lg:max-w-6xl">
            <div class="carousel-item">
                <SpecialistCard />
            </div>
            <div class="carousel-item">
                <SpecialistCard />
            </div>
            <div class="carousel-item">
                <SpecialistCard />
            </div>
            <div class="carousel-item">
                <SpecialistCard />
            </div>
            <div class="carousel-item">
                <SpecialistCard />
            </div>
        </div>
    </div>

</template>
