<script setup lang="ts">
import { motion, useScroll } from 'motion-v'
import LandingHero from './LandingHero.vue';
import SpecialistContent from './SpecialistContent.vue';

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

    <LandingHero />
    <SpecialistContent />
</template>