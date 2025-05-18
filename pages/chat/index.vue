<script setup lang="ts">
import ChatSidebar from '~/components/chatbot-page/ChatSidebar.vue';
import ChatMenu from '~/components/chatbot-page/ChatMenu.vue';
import ChatInput from '~/components/chatbot-page/ChatInput.vue';
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-gray-50">
    <ChatSidebar />
    <ChatMenu />

    <div class="relative flex flex-col w-full h-full p-6">
      <div class="text-center mt-10">
        <h2 class="font-bold text-3xl text-cyan-800">Konsultasikan Keluhan Anda Sekarang</h2>
        <p class="text-gray-500 mt-2">Klik salah satu topik di bawah atau ketik keluhan Anda</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-2 gap-4 w-[80%] mx-auto mt-8">
        <div
            class="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50"
        >
          Apa itu sinuitis
        </div>
        <div
            class="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50"
        >
          Bagaimana gejala penyakit jantung
        </div>
        <div
            class="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50"
        >
          Mencegah diabetes sejak dini
        </div>
        <div
            class="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer text-center text-sm text-gray-700 hover:bg-cyan-50"
        >
          Obat herbal untuk gatal-gatal
        </div>
      </div>

      <div class="mt-auto pt-6">
        <ChatInput />
      </div>
    </div>
  </div>
</template>
