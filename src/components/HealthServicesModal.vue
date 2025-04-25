<script setup lang="ts">
const { openModal } = defineProps<{
    openModal: boolean
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <section v-if="openModal">
    <div @click="emit('close')" class="fixed bg-black opacity-50 z-20 inset-0"></div>
    
    <div class="fixed bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 w-[38rem] lg:w-[52rem]  p-6 mb-20 md:px-9 my-10 rounded-xl bg-white shadow-xl z-30">
      <h1 class="text-4xl text-gray-900 font-extrabold mb-8 drop-shadow">
        Layanan <span class="text-cyan-700">Kesehatan</span>
      </h1>

      <div class="grid grid-cols-4 lg:grid-cols-6 gap-7">
        <div class="bg-white p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-cyan-100 to-blue-400 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/diabetes-test.png" alt="Diabetes">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Diabetes
          </p>
        </div>
        <div class="bg-white p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-pink-100 to-pink-400 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/cancer-cell.png" alt="Kanker">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Kanker
          </p>
        </div>
        <div class="bg-white p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-zinc-100 to-zinc-500 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/asthmatic.png" alt="Asma">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Asma
          </p>
        </div>
        <div class="bg-white p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/dermatology.png" alt="Kulit">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Penyakit Kulit
          </p>
        </div>
        <div class="bg-white p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
          <div class="w-20 h-20 cursor-pointer bg-gradient-to-br from-red-300 to-red-500 p-2 rounded-xl mb-4 flex items-center justify-center">
            <img src="/hearth.png" alt="Jantung">
          </div>
          <p class="text-gray-700 text-sm font-medium leading-tight">
            Penyakit Jantung
          </p>
        </div>
        <div class="bg-white p-4 flex flex-col items-center text-center hover:scale-105 active:scale-95">
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
  </section>
</template>