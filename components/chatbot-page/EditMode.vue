<script setup lang="ts">
const editModeRef = useTemplateRef<(HTMLTextAreaElement)>('edit-mode');

defineExpose({
    editModeRef
});
</script>

<template>
    <form action="">
        <textarea 
            ref="edit-mode"
            class="max-w-5xl border border-cyan-600 resize-none"
            name="editedPrompt" />
    </form>
</template>