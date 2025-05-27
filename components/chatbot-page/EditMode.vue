<script setup lang="ts">
const editModeRef = useTemplateRef<(HTMLTextAreaElement)>('edit-mode');

defineExpose({
    editModeRef
});

const emit = defineEmits<{
    (e: 'cancel:edit-mode'): void
}>();

const prompt = ref<string>('');
</script>

<template>
    <form @submit.prevent="" class="w-full">
        <div class="flex flex-col rounded-lg overflow-hidden p-3 bg-cyan-50">
            <textarea 
                ref="edit-mode"
                v-model="prompt"
                class=" w-full h-42 outline-none resize-none"
                name="prompt" 
                @keydown.enter.prevent=""
            />
            
            <div class="flex justify-end gap-4">
                <button 
                    @click="emit('cancel:edit-mode')" 
                    class="btn"
                >
                    Batal
                </button>
                <button 
                    @click=""
                    class="btn bg-cyan-800 hover:bg-cyan-900 text-white transition-all duration-300"
                    :class="!prompt && 'opacity-50 pointer-events-none'"
                    type="submit"
                >
                    Kirim
                </button>
            </div>
        </div>
    </form>
</template>