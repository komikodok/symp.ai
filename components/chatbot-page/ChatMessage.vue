<script setup lang="ts">
import { type IMessage } from '~/types/message.type';

const { role, content } = defineProps<IMessage>();

</script>

<template>
    
    <div class="mb-10 break-words break-all whitespace-normal" :class="role === 'user' && 'chat chat-end'">
        <div 
            class="flex gap-3"
        >
            <img
                v-if="role === 'bot'" 
                src="/logo2.png" alt="Chat logo"
                class="w-12 h-12 rounded-full m-2"
            >
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
        </div>
    </div>

</template>