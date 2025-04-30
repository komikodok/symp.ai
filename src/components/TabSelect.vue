<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import { motion } from 'motion-v';

const props = defineProps<{
    tabs: string[],
    currentTab: string
}>();

const emit = defineEmits<{
    (e: 'update-tab', newTab: string): void
}>();

const tabRefs = useTemplateRef<(HTMLButtonElement)[]>('tab');
const highlightX = ref<number>(0);
const highlightWidth = ref<string>('0px');

onMounted(() => {
    const btn = tabRefs.value?.[0];
    if (btn) {
        highlightWidth.value = `${btn.offsetWidth}px`;
        highlightX.value = btn.offsetLeft;
    }
});

const handleClick = (tab: string, i: number) => {
    emit('update-tab', tab);

    const btn = tabRefs.value?.[i];
    if (btn) {
        highlightWidth.value = `${btn.offsetWidth}px`;
        highlightX.value = btn.offsetLeft;
    }
}
</script>

<template>
    <div class="relative w-fit h-auto ">
        <!-- Highlight -->
        <motion.div 
            class="absolute h-full -z-10 bg-cyan-400 rounded-lg" 
            :style="{width: highlightWidth}"
            :animate="{ x: highlightX}"
        />
        <!-- Button -->
        <div class="flex border">
            <button
                v-for="(tab, i) in props.tabs"
                ref="tab"
                class="font-semibold m-2 p-2 cursor-pointer"
                @click.prevent="handleClick(tab, i)"
            >
                {{ tab }}
            </button>
        </div>
    </div>
</template>