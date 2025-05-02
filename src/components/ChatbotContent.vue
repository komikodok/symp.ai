<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';

import Loading from './Loading.vue';

const isLoading = ref<boolean>(false);

</script>

<template>
    <div class="h-full border">
        <Loading :is-loading="isLoading" @update-loading="(state: boolean) => isLoading = state"/>

            <motion.div 
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :transition="{
                    delay: 2.2,
                    duration: 0.8
                }"
                class="p-8 lg:p-5 space-y-6"
            >
                <h2 class="text-3xl text-slate-950 font-semibold">Chatbot AI Medis</h2>
                <p class="text-slate-700 max-w-xl">
                    Konsultasikan pertanyaan medis Anda secara instan dengan AI, didukung oleh dokumen, jurnal, karya ilmiah medis terkait.
                    Chatbot ini dapat membantu menjawab pertanyaan seputar kesehatan umum, gejala penyakit, dan rekomendasi awal.
                </p>
            </motion.div>

    </div>
</template>