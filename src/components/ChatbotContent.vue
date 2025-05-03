<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';

import Loading from './Loading.vue';

const isLoading = ref<boolean>(false);

</script>

<template>
    <div class="h-full border">
        <Loading :is-loading="isLoading" @update-loading="(state: boolean) => isLoading = state"/>

        <motion.h2 
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{
                delay: 2.2,
                duration: 0.8
            }"
            class="p-8 max-w-5xl border lg:p-5 font-medium text-slate-700 mx-auto text-center text-xl space-y-6"
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aperiam harum exercitationem blanditiis cupiditate saepe suscipit ex labore laborum magnam. Incidunt quis, eos nesciunt sapiente repellendus aliquid cum vitae consequuntur?
        </motion.h2>

    </div>
</template>

<!-- 
<p class="text-slate-700 max-w-xl">
    Konsultasikan pertanyaan medis Anda secara instan dengan AI, didukung oleh dokumen, jurnal, karya ilmiah medis terkait.
    Chatbot ini dapat membantu menjawab pertanyaan seputar kesehatan umum, gejala penyakit, dan rekomendasi awal.
</p> -->