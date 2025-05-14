<script setup lang="ts">
const { role, content } = defineProps<{
    role: 'bot' | 'user',
    content: string
}>();

</script>

<template>
    <div class="mb-10 break-words break-all whitespace-normal" :class="role === 'bot' ? 'chat chat-start' : 'chat chat-end'">
        <p 
            :class="[
                'chat-bubble max-w-[75%]',
                role === 'user' 
                    ? 'bg-base-300 text-slate-950'
                    : 'bg-cyan-800 text-base-100'
            ]"
        >
            {{ content }}
        </p>
    </div>
</template>