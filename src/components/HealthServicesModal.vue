<script setup lang="ts">
const { openModal } = defineProps<{
    openModal: boolean
}>();
</script>

<template>
  <section v-if="openModal" class="fixed inset-0 max-w-7xl mx-auto p-6 mb-20 md:px-9 overflow-hidden">
    <div class="fixed inset-0 bg-black opacity-40"></div>
    
    <div class="p-6 my-10 rounded-xl bg-white shadow-xl">
      <h1 class="text-4xl text-gray-900 font-extrabold mb-8 drop-shadow">
        Layanan <span class="text-cyan-700">Kesehatan</span>
      </h1>

      <div class="grid grid-cols-3 lg:grid-cols-6 gap-6">
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