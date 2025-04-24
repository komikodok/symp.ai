<script setup lang="ts">
const { openChatbot } = defineProps<{
    openChatbot: boolean
}>();

const emit = defineEmits<{
    (e: 'close'): void;
}>();
</script>

<template>
    <div v-if="openChatbot">
        <div @click="emit('close')" class="fixed bg-black opacity-40 z-20 inset-0"></div>
        <div class="w-96 h-96 fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-base-100 z-30"></div>
    </div>
</template>