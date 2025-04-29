<script setup lang="ts">
const props = defineProps<{
    tabs?: string[],
    currentTab?: string
}>();

const emit = defineEmits<{
    (e: 'update-tab', newTab: string): void
}>();

</script>

<template>
    <div class="relative flex rounded-xl p-1 overflow-hidden border">
        <button
            v-for="tab in props.tabs"
            class="p-3 rounded-xl cursor-pointer"
            :class="props.currentTab === tab && 'bg-cyan-300'"
            @click="emit('update-tab', tab)"
        >
            {{ tab }}
        </button>
    </div>
</template>