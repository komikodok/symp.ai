<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';
import HeroImage from './HeroImage.vue';
import Chatbot from './Chatbot.vue';

let openChatbot = ref<boolean>(false);

</script>

<template>
  <section class="pt-20 pb-4 bg-base-100">
    <div class="mx-auto max-w-7xl bg-base-100 items-center p-6">
      <div class="flex justify-between">
          <div class="md:w-3/5 overflow-hidden max-w-2xl mx-auto">
            <motion.h2
              :initial="{ opacity: 0, x: -100 }"
              :animate="{ opacity: 1, scale: 1, x: 0 }"
              :transition="{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
              }"
              class="p-4 max-w-xl text-4xl font-bold text-sky-900 leading-relaxed">
              Konsultasi Kesehatan 24/7 Kapan Saja, Dimana Saja. <br/>
              <span class="text-sky-600">- Didukung oleh AI</span>
            </motion.h2>
            <motion.p 
              :initial="{ opacity: 0, y: 50 }"
              :animate="{ opacity: 1, scale: 1, y: 0}"
              :transition="{
                delay: 1
              }"
              class="p-4 max-w-xl my-3 text-zinc-700 text-lg font-semibold"
            >
              Dapatkan bantuan medis dari AI untuk memahami gejala Anda, memberikan saran awal, dan menyarankan langkah selanjutnya.
            </motion.p>
            <motion.button
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1, scale: 1}"
              :transition="{ duration: 1 }"
              class="btn btn-ghost justify-end m-4 font-semibold text-lg text-white bg-cyan-700 hover:bg-cyan-900 active:bg-cyan-900 border-transparent"
              @click="openChatbot = true"
            >
              Konsultasi sekarang
            </motion.button>
          </div>

          <Chatbot :open-chatbot="openChatbot" @close="openChatbot = false"/>
    
          <motion.div 
            :initial="{ opacity: 0, x: 100 }"
            :animate="{ opacity: 100, scale: 1, x: 0 }"
            :transition="{
                duration: 1,
                ease: 'linear'
            }"
            class="w-96 hidden lg:flex justify-center mx-auto"
          >
            <HeroImage />
          </motion.div>
      </div>

      <div class="w-full grid grid-cols-2 max-lg:gap-4 lg:grid-cols-3 my-7 lg:my-8 justify-items-center">
        <motion.div
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 1.2 }"
          class="relative card card-dash bg-white w-72 shadow-lg rounded-xl transition-all duration-300 active:scale-105 active:shadow-xl hover:scale-105 hover:shadow-xl lg:mx-5 overflow-hidden"
        >

          <div class="card-body">
            <div class="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-sky-600">
                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
              </svg>
              <h2 class="card-title text-xl font-semibold text-sky-800">AI Chatbot</h2>
            </div>
            <p class="text-base text-zinc-700">
              Dapatkan panduan medis instan dari AI pintar yang dilatih menggunakan dokumen medis terkait.
            </p>
          </div>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 1.2 }"
          class="relative card card-dash bg-white w-72 shadow-lg rounded-xl transition-all duration-300 active:scale-105 active:shadow-xl hover:scale-105 hover:shadow-xl lg:mx-5 overflow-hidden"
        >

          <div class="card-body">
            <div class="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-sky-600">
                <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
              </svg>

              <h2 class="card-title text-xl font-semibold text-sky-800">Analisis Dokumen Medis</h2>
            </div>
            <p class="text-base text-zinc-700">
              Unggah dokumen medis Anda untuk mendapatkan saran yang disesuaikan dengan kondisi kesehatan Anda.
            </p>
          </div>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 1.2 }"
          class="relative card card-dash bg-white w-72 shadow-lg rounded-xl transition-all duration-300 active:scale-105 active:shadow-xl hover:scale-105 hover:shadow-xl lg:mx-5 overflow-hidden"
        >

          <div class="card-body">
            <div class="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-sky-600">
                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
              </svg>
              <h2 class="card-title text-xl font-semibold text-sky-800">Analisis Foto Medis</h2>
            </div>
            <p class="text-base text-zinc-700">
              Unggah foto medis seperti hasil scan atau luka, dan AI akan memberikan analisis serta saran medis awal.
            </p>
          </div>
        </motion.div>

      </div>

      <div class="md:p-8 p-4">
        <div class="bg-base-100 border-base-300 collapse collapse-arrow border">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-cyan-700 text-primary-content peer-checked:bg-cyan-900 peer-checked:text-secondary-content"
          >
            <strong>Penting</strong>
          </div>
          <div
            class="collapse-content font-semibold bg-cyan-700 text-primary-content peer-checked:bg-cyan-900 peer-checked:text-secondary-content"
          >
          “Perlu diingat, aplikasi ini bukan pengganti dokter, namun mampu memberikan saran awal berdasarkan referensi dari jurnal dan dokumen medis melalui teknologi RAG,
          tujuan awalnya adalah untuk media informasi dan bukan pengganti konsultan medis profesional. Konsultasikan ke dokter untuk penanganan yang tepat.”
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
