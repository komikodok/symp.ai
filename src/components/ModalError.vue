<script setup lang="ts">
    const { isOpenModal } = defineProps<{
        isOpenModal: boolean
    }>();
</script>

<template>
    <div v-if="isOpenModal">
        <div class="w-screen h-screen fixed bg-black opacity-50 z-10"></div>
        <div class="fixed bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 bg-base-200 rounded-md shadow-md w-96 p-4 z-20">
            <button @click="!isOpenModal" class="absolute top-1 right-2 text-lg cursor-pointer">×</button>
            <strong>Error!</strong>
            <p class="font-semibold">Maaf, fitur ini belum tersedia.</p>
        </div>
    </div>
</template>