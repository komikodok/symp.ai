<script setup lang="ts">
</script>

<template>
  <div class="w-72 bg-white shadow-xl rounded-2xl overflow-hidden">
    <!-- Header -->
    <div class="flex items-center gap-4 p-4 shadow-md">
      <div class="w-12 h-12 rounded-full border-2 border-sky-500 flex items-center justify-center">
        <!-- icon/avatar -->
      </div>
      <div>
        <h2 class="font-semibold text-lg text-gray-800">Spesialis Jantung</h2>
        <p class="flex items-center text-sm text-gray-500 gap-1">
          <span>1</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
               stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639
                     C3.423 7.51 7.36 4.5 12 4.5
                     c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639
                     C20.577 16.49 16.64 19.5 12 19.5
                     c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="px-4 pt-2 pb-4">
      <p class="text-gray-700 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fuga sint aperiam voluptas, dolores iure nam, dicta eius, accusamus ab numquam autem dolore officia fugiat modi hic molestiae nemo praesentium.
      </p>
    </div>

    <!-- Button -->
    <div class="px-4 pb-4">
      <button 
        class="w-full btn bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg">
        Konsultasi Sekarang
      </button>
    </div>
  </div>
</template>
