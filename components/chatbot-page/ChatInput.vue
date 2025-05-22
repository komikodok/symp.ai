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
            class="flex items-center gap-2 bg-white border border-cyan-900/50 p-2 rounded-xl"
        >
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
        </motion.div>
    </form>
</template>