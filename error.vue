<script setup lang="ts">
const { error } = defineProps<{
  error: {
    message: string
    statusCode: string
  }
}>()
</script>

<template>
  <NuxtLayout>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-100 text-center px-4">
      <img
        src="/error.png"
        alt="Medical character"
        class="w-64 mb-8"
      />

      <h1 class="text-6xl font-bold text-blue-700">{{ error.statusCode }}</h1>
      <p class="text-xl mt-4 text-gray-700">Oops! {{ error.message }}</p>

      <NuxtLink
        to="/"
        class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
      >
        Go back home
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
