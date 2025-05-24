<script setup lang="ts">
import { motion } from 'motion-v';

const { promptProps} = defineProps<{
    promptProps?: string
}>();

const prompt = ref<string>("");

const emit = defineEmits<{
    (e: 'send-message', prompt: string): void
}>();

watch(() => promptProps, (newVal) => {
    if (newVal) {
        prompt.value = newVal;
    }
});

const textareaRef = useTemplateRef<(HTMLTextAreaElement)>('textarea-ref');

defineExpose({
    textareaRef
})

const autoResize = () => {
    if (textareaRef.value) {
        textareaRef.value.style.height = "auto";
        textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;

        textareaRef.value.style.maxHeight = "300px";
        textareaRef.value.style.overflowY = "auto";
    }
};

watch(prompt, autoResize);

const handleSubmit = () => {
    emit('send-message', prompt.value);

    if (promptProps) {
        navigateTo({
            path: '/konsultasi/diabetes',
            query: {
                'prompt': prompt.value
            }
        });
    }
    prompt.value = "";
}
</script>

<template>
    <form
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 pb-4"
      @submit.prevent="handleSubmit"
    >
        <motion.div 
            :animate="{ y: [100, 0], opacity: [0, 1]}"
            :transition="{ duration: 0.8 }"
            class="bg-white border border-cyan-900/50 p-2 rounded-xl"
        >
            <div class="flex items-center gap-2">
                <textarea
                ref="textarea-ref"
                v-model="prompt"
                name="prompt"
                rows="1"
                class="w-full resize-none overflow-hidden bg-white outline-none"
                placeholder="Tanyakan keluhan anda"
                @keydown.enter.prevent="handleSubmit"
                />
                <div class="tooltip" data-tip="Kirim pesan">
                    <button 
                        type="submit" 
                        class="btn bg-cyan-800 hover:bg-cyan-900 text-white transition-all duration-300"
                        :class="!prompt && 'opacity-50 pointer-events-none'"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    </button>
                </div>
            </div>

            <button class="cursor-pointer my-1 tooltip tooltip-bottom" data-tip="Pencarian Web">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 opacity-80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            </button>
        </motion.div>
    </form>
</template>