<script setup lang="ts">
import ChatSidebar from '~/components/chatbot-page/ChatSidebar.vue';
import ChatMenu from '~/components/chatbot-page/ChatMenu.vue';
import ChatWindow from '~/components/chatbot-page/ChatWindow.vue';

import { type IDisesases } from '~/types/disesases.type';

const { data, error } = useFetch('/api/penyakit');

const diseases = reactive<IDisesases>({
    name: '',
    slug: ''
});

const route = useRoute();

watch(data, () => {
    if (error.value) {
        alert(error.value.message);
    } else {
        const diseasesData = data.value?.find(item => item.slug === route.params.penyakit);
        diseases.name = diseasesData?.name;
        diseases.slug = diseasesData?.slug;
    }

    useHead({
        title: `Konsultasi ${diseases?.name}` 
    })
    
}, { immediate: true });

</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <ChatSidebar />
        <ChatMenu />
        <ChatWindow />
    </div>
</template>