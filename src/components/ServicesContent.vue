<script setup lang="ts">
import { ref } from 'vue';
import TabSelect from './TabSelect.vue';

const currentTab = ref<string>('Chatbot');
const tabs = ['Chatbot', 'Analisa Dokumen Medis', 'Analisa Foto Medis']
</script>

<template>
    <div class="max-w-7xl mx-auto border p-3 flex">
        <TabSelect :tabs="tabs" :currentTab="currentTab" @update-tab="(newTab: string) => currentTab = newTab"/>
    </div>
</template>