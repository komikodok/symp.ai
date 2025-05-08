<script setup lang="ts">
import { motion, useScroll } from 'motion-v';

import ServicesHero from './ServicesHero.vue';
import ServicesContent from './ServicesContent.vue';

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
</script>

<template>
    <motion.div id="scroll-indicator" :style="scrollIndicator" class="bg-sky-800 rounded-full z-50" />
    
    <ServicesHero />
    <ServicesContent />
</template>