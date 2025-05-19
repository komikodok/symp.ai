<script setup lang="ts">
import { motion, useScroll } from 'motion-v';

import ServicesHero from '~/components/services-page/ServicesHero.vue';
import ServicesContent from '~/components/services-page/ServicesContent.vue';

definePageMeta({
    layout: 'navbar'
});

const { scrollYProgress } = useScroll();
const scrollIndicator = {
    scaleX: scrollYProgress,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "10px",
    originX: 0,
}

const childRef = useTemplateRef<InstanceType<(typeof ServicesContent)>>('child-ref');

const handleScrollTarget = () => {
    const target = childRef.value;
    target?.scrollTarget?.scrollIntoView({behavior: 'smooth'});
}
</script>

<template>
    <motion.div id="scroll-indicator" :style="scrollIndicator" class="bg-sky-800 rounded-full z-50" />
    
    <ServicesHero @scroll-target="handleScrollTarget"/>
    <ServicesContent ref="child-ref" />
</template>