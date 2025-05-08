<script setup lang="ts">
import { motion } from 'motion-v';
import { onMounted } from 'vue';

const { isLoading } = defineProps<{
    isLoading: boolean
}>();

const emit = defineEmits<{
    (e: 'update-loading', state: boolean): void
}>();

onMounted(() => {
    emit('update-loading', true);

    setTimeout(() => {
        emit('update-loading', false);
    }, 2200);
});
</script>

<template>
    <motion.span 
        v-if="isLoading"
        :initial="{ scale: 0, opacity: 0 }"
        :animate="{ scale: 3, opacity: 1 }"
        class="absolute top-1/2 right-1/2 translate-x-1/2 loading text-cyan-700 loading-ring loading-xl" 
    />
</template>