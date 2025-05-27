<script setup lang="ts">
import { motion } from 'motion-v';

import ChatSidebar from '~/components/chatbot-page/ChatSidebar.vue';
import ChatMenu from '~/components/chatbot-page/ChatMenu.vue';
import ChatInput from '~/components/chatbot-page/ChatInput.vue';

const quickPrompt = ref<string>("");

const childRef = useTemplateRef<InstanceType<(typeof ChatInput)>>('child-ref');

const handleClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  quickPrompt.value = target.innerText.trim();

  childRef.value?.textareaRef?.focus();
}
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <ChatSidebar />
    
    <ChatMenu />

    <div class="relative flex flex-col w-full h-full p-6">
      <div class="text-center mt-10">
        <motion.h2 
          :animate="{ x: [-100, 0 ], opacity: [0, 1] }"
          :transition="{ duration: 0.8 }"
          class="font-bold text-3xl text-cyan-800"
        >
          Konsultasikan Keluhan Anda Sekarang
        </motion.h2>
        <motion.p 
          :animate="{ opacity: [0, 0.5, 0.8, 1] }"
          :transition="{ duration: 1 }"
          class="text-gray-500 mt-2">Klik salah satu topik di bawah atau konsultasi keluhan Anda</motion.p>
      </div>

      <div class="flex flex-wrap gap-3 justify-center mt-8 w-[80%] mx-auto">
        <div
            @click="handleClick"
            class="px-4 py-2 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50 w-fit"
        >
          Apa itu sinuitis
        </div>
        <div
            @click="handleClick"
            class="px-4 py-2 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50 w-fit"
        >
          Bagaimana gejala penyakit jantung
        </div>
        <div
            @click="handleClick"
            class="px-4 py-2 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50 w-fit"
        >
          Mencegah diabetes sejak dini
        </div>
        <div
            @click="handleClick"
            class="px-4 py-2 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50 w-fit"
        >
          Obat herbal untuk gatal-gatal
        </div>
      </div>

      <div class="mt-auto pt-6">
        <ChatInput ref="child-ref" :prompt-props="quickPrompt"/>
      </div>
    </div>
  </div>
</template>
