<script setup lang="ts">
import { type IMessage } from '~/types/message.type';

const { role, content } = defineProps<{
    role: string,
    content: string,
}>();

const endMessage = useTemplateRef<(HTMLDivElement)>('end-message');

const isCopied = ref<boolean>(false);

const isWaiting = ref<boolean>(true);

onMounted(() => {
  endMessage.value?.scrollIntoView({ behavior: 'smooth', block: 'end' });

  setTimeout(() => isWaiting.value = false, 1000);
});

watch(() => content, () => {
  endMessage.value?.scrollIntoView({ behavior: 'smooth', block: 'end' });
}, { deep: true })

function handleCopy() {
    isCopied.value = true;
    navigator.clipboard.writeText(content);

    setTimeout(() => {
        isCopied.value = false
    }, 1500);
};
</script>

<template>
    <div class="mb-10 break-words break-all whitespace-normal chat chat-start">
        <div class="chat-image avatar">
            <div class="w-7">
                <img src="/logo2.png" alt="Chat logo" draggable="false" />
            </div>
        </div>

        <span v-if="isWaiting" class="loading loading-spinner loading-md opacity-50" />
        <p v-else-if="!isWaiting" class="text-slate-950">
            {{ content }}
        </p>

        <div v-if="!isCopied" class="chat-footer flex gap-3 py-2">
            <button @click="handleCopy" class="cursor-pointer tooltip tooltip-bottom" data-tip="Simpan">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-80">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                    </svg>
            </button>
        </div>
        <h2 v-else-if="isCopied" class="chat-footer gap-3 py-1 opacity-80 text-sm">Pesan disimpan</h2>
    </div>

    <div ref="end-message" class="" />
</template>