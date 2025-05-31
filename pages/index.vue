<script setup lang="ts">
import { motion, useScroll } from 'motion-v'
import LandingHero from '~/components/landing-page/LandingHero.vue';
import SpecialistContent from '~/components/landing-page/SpecialistContent.vue';
import CharacterIntro from '~/components/landing-page/CharacterIntro.vue';

definePageMeta({
    layout: 'navbar-footer'
});

useHead({
    title: "Beranda"
})

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

    <SpecialistContent :scroll-y-progress="scrollYProgress" />

    <CharacterIntro />
</template>