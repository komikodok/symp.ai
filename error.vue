<script setup lang="ts">
import { motion } from 'motion-v';

const { error } = defineProps<{
  error: {
    message: string
    statusCode: string
  }
}>()

const mousePosition = reactive({
  x: 0,
  y: 0
})

onMounted(() => {
  window.addEventListener('mousemove', mouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', mouseMove)
})

function mouseMove(e: MouseEvent) {
  mousePosition.x = e.clientX - 100
  mousePosition.y = e.clientY - 100
}
</script>

<template>
  <NuxtLayout>
    <motion.div 
      :animate="{ x: mousePosition.x, y: mousePosition.y }"
      :transition="{
        type: 'spring',
        stiffness: 1200
      }"
      class="fixed inset-0 w-[200px] h-[200px] rounded-full bg-blue-300 blur-2xl " />
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-100 text-center px-4">
      <img
        src="/error.png"
        alt="Medical character"
        class="w-64 mb-8 z-10"
      />

      <div class="flex flex-col gap-4">
        <h1 class="text-6xl font-bold text-blue-700 z-10">{{ error.statusCode }}</h1>
        <p class="text-xl mt-4 text-gray-700 z-10">Oops! {{ error.message }}</p>
  
        <NuxtLink
          to="/"
          class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition z-10"
        >
          Go back home
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>
