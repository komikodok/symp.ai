<script setup lang="ts">
import { motion } from 'motion-v';
import { onMounted } from 'vue';

const { openSkeleton } = defineProps<{
  openSkeleton?: boolean,
}>();

const emit = defineEmits<{
  (e: 'is-open-skeleton', state: boolean): void
}>();

onMounted(() => {
  emit('is-open-skeleton', true);

  setTimeout(() => {
    emit('is-open-skeleton', false);
  }, 2200)
});
</script>

<template>
  <!-- Skeleton -->
  <div v-if="openSkeleton" class="w-72 bg-white shadow-xl rounded-2xl overflow-hidden">
    <div class="flex w-full items-center gap-4 p-4 shadow-md">
      <div class="w-12 h-12 skeleton rounded-full flex items-center justify-center"></div>
      <div class="flex flex-col gap-3">
        <h2 class="skeleton w-42 h-4"></h2>
        <p class="flex skeleton w-34 h-4 items-center text-sm text-gray-500 gap-1"></p>
      </div>
    </div>

    <div class="flex flex-col gap-4 px-4 h-42 py-5">
      <p class="skeleton w-full h-4"></p>
      <p class="skeleton w-[80%] h-4"></p>
      <p class="skeleton w-[90%] h-4"></p>
      <p class="skeleton w-[50%] h-4"></p>
    </div>
  </div>

  <!-- Card -->
  <motion.div 
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{
      duration: 0.8
    }"
    v-if="!openSkeleton" 
    class="w-72 bg-white shadow-xl rounded-2xl overflow-hidden"
  >
    <!-- Header -->
    <div class="flex items-center gap-4 p-4 shadow-md">
      <div class="w-12 h-12 rounded-full flex items-center justify-center">
        <slot name="image"></slot>
      </div>
      <div>
        <h2 class="font-semibold text-lg text-gray-800">
          <slot name="header"></slot>
        </h2>
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
    <div class="flex items-center text-start my-2 h-42 p-7 overflow-y-scroll" :style="{scrollbarWidth: 'none'}">
      <p class="text-gray-700 text-sm leading-relaxed">
        <slot name="content"></slot>
      </p>
    </div>

    <!-- Button -->
    <div class="px-4 pb-4">
      <button 
        class="w-full btn bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg">
        Konsultasi Sekarang
      </button>
    </div>
  </motion.div>
</template>
