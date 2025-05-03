<script setup lang="ts">
import { ref } from 'vue';

import TabSelect from './TabSelect.vue';
import ChatbotContent from './ChatbotContent.vue';

const currentTab = ref<string>('Chatbot AI');
const tabs = ['Chatbot AI', 'Analisa Dokumen Medis', 'Analisa Foto Medis']
</script>

<template>
    <div class="max-w-7xl h-auto p-3 mx-auto my-10 max-lg:justify-center flex">
        <TabSelect :tabs="tabs" :current-tab="currentTab" @update-tab="(newTab: string) => currentTab = newTab"/>
    </div>

    <div class="relative max-w-7xl mx-auto mb-32">
        <ChatbotContent v-if="currentTab === 'Chatbot AI'"/>
    </div>

    <div class="flex max-w-7xl h-82 mx-auto gap-4">
        <div class="w-72 h-72 flex-shrink-0 border overflow-hidden bg-white flex items-center justify-center">
            <img 
                class="object-contain pointer-events-none p-2" 
                src="/3.png" 
                alt="Avatar" 
                draggable="false"
            />
        </div>

        <div class="max-w-[42rem] border">
            <div class="chat chat-start">
                <div class="chat-bubble bg-cyan-500 text-base-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate! Aspernatur facilis totam, minima cumque molestiae pariatur similique consequuntur magni ipsa nulla, provident a unde voluptate itaque placeat! Enim, cum?
                </div>
            </div>
        </div>
    </div>
</template>

