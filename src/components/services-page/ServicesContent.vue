<script setup lang="ts">
import { ref } from 'vue';

import TabSelect from '../common/TabSelect.vue';
import ChatbotContent from './chatbot-ai/Content.vue';

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


</template>

