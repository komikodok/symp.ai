<script setup lang="ts">
import ChatNavbar from './ChatNavbar.vue';
</script>

<template>
    <div class="flex flex-col border w-full h-screen">
        <ChatNavbar />

        <div class="flex-1 overflow-y-scroll p-4">
            <p>lorem*1000</p>
        </div>

        <form class="fixed bottom-0 w-full border h-20"></form>
    </div>
</template>