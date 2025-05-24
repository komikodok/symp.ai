<script setup lang="ts">
import { type IMessage } from '~/types/message.type';

const { role, content } = defineProps<IMessage>();

const endMessage = useTemplateRef<(HTMLDivElement)>('end-message');

const isCopied = ref<boolean>(false);

onMounted(() => {
  endMessage.value?.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
    
    <div class="mb-10 break-words break-all whitespace-normal" :class="role === 'user' ? 'chat chat-end' : 'chat chat-start'">

        <!-- Bot Logo -->
        <div v-if="role === 'bot'" class="chat-image avatar">
            <div class="w-7">
                <img src="/logo2.png" alt="Chat logo" />
            </div>
        </div>

        <!-- Ballon Chat -->
        <p 
            :class="[
                'max-w-5xl',
                role === 'user' 
                    ? 'chat-bubble bg-cyan-800 text-base-100'
                    : 'text-slate-950'
            ]"
        >
            {{ content }}
        </p>

        <!-- Message Features -->
        <div v-if="!isCopied" class="chat-footer flex gap-3 py-2">
            <button @click="handleCopy" class="cursor-pointer tooltip tooltip-bottom" data-tip="Simpan">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-80">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                    </svg>
            </button>
            <button v-if="role === 'user'" class="cursor-pointer tooltip tooltip-bottom" data-tip="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-80">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
            </button>
        </div>

        <!-- If Copied State -->
        <h2 v-if="isCopied" class="chat-footer gap-3 py-1 opacity-80 text-sm">Pesan disimpan</h2>
    </div>

    <!-- End Message -->
    <div v-if="role === 'bot'" ref="end-message" class="" />

</template>