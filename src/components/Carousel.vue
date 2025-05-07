<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue';
import { motion } from 'motion-v';

import SpecialistCard from './SpecialistCard.vue';

const openSkeleton = ref(false);

const carouselRef = useTemplateRef('carousel-ref');
const showLeftGradient = ref(false);
const showRightGradient = ref(true);

onMounted(() => {
  const carousel = carouselRef.value;
  if (!carousel) return;

  const handleScroll = () => {
    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;

    showLeftGradient.value = scrollLeft > 0;
    showRightGradient.value = scrollLeft + clientWidth < scrollWidth;
  };

  carousel.addEventListener('scroll', handleScroll);
  handleScroll();

  onUnmounted(() => {
    carousel.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
    <div class="relative flex justify-center mt-20">
        <motion.div 
            :animate="{ opacity: showLeftGradient ? [0, 1] : [1, 0] }"
            :transition="{ duration: 0.4 }"
            v-if="showLeftGradient" 
            class="absolute left-0 w-[12%] h-full bg-gradient-to-r from-base-100 via-base-100 to-transparent"></motion.div>
        <motion.div 
            :animate="{ opacity: showRightGradient ? [0, 1] : [1, 0] }"
            :transition="{ duration: 0.4 }"
            v-if="showRightGradient" 
            class="absolute right-0 w-[12%] h-full bg-gradient-to-l from-base-100 via-base-100 to-transparent"></motion.div>

        <div ref="carousel-ref" class="carousel carousel-center space-x-7 p-4 max-w-3xl lg:max-w-6xl">
            
          <div class="carousel-item">
            <SpecialistCard :open-skeleton="openSkeleton" @is-open-skeleton="(state: boolean) => openSkeleton = state">
              <template #header>
                Diabetes
              </template>
              <template #image>
                <img src="/diabetes-test.png" alt="">
              </template>
              <template #content>
                Kendalikan gula darah Anda dengan lebih baik. Dapatkan saran awal tentang pola makan, gejala seperti sering haus, sering buang air kecil, dan pencegahan komplikasi.
              </template>
            </SpecialistCard>
          </div>

          <div class="carousel-item">
            <SpecialistCard :open-skeleton="openSkeleton" @is-open-skeleton="(state: boolean) => openSkeleton = state">
              <template #header>
                Kanker
              </template>
              <template #image>
                <img src="/cancer-cell.png" alt="">
              </template>
              <template #content>
                Pahami lebih dalam gejala awal kanker seperti benjolan yang tidak hilang, penurunan berat badan drastis, atau perubahan kulit. Dapatkan saran untuk pemeriksaan lebih lanjut.
              </template>
            </SpecialistCard>
          </div>

          <div class="carousel-item">
            <SpecialistCard :open-skeleton="openSkeleton" @is-open-skeleton="(state: boolean) => openSkeleton = state">
              <template #header>
                Asma
              </template>
              <template #image>
                <img src="/asthmatic.png" alt="">
              </template>
              <template #content>
                Kenali tanda-tanda asma seperti sesak napas, batuk malam hari, atau mengi. Dapatkan tips pengendalian serangan asma.
              </template>
            </SpecialistCard>
          </div>

          <div class="carousel-item">
            <SpecialistCard :open-skeleton="openSkeleton" @is-open-skeleton="(state: boolean) => openSkeleton = state">
              <template #header>
                Kulit
              </template>
              <template #image>
                <img src="/dermatology.png" alt="">
              </template>
              <template #content>
                Cari tahu penyebab masalah kulit Anda, mulai dari alergi, jerawat, hingga infeksi. Dapatkan saran awal untuk perawatan yang tepat.
              </template>
            </SpecialistCard>
          </div>

          <div class="carousel-item">
            <SpecialistCard :open-skeleton="openSkeleton" @is-open-skeleton="(state: boolean) => openSkeleton = state">
              <template #header>
                Jantung
              </template>
              <template #image>
                <img src="/hearth.png" alt="">
              </template>
              <template #content>
                Pahami kondisi jantung Anda lebih baik. Dapatkan saran awal mengenai gejala seperti nyeri dada, detak tidak teratur, dan sesak napas.
              </template>
            </SpecialistCard>
          </div>

          <div class="carousel-item">
            <SpecialistCard :open-skeleton="openSkeleton" @is-open-skeleton="(state: boolean) => openSkeleton = state">
              <template #header>
                Darah Tinggi
              </template>
              <template #image>
                <img src="/blood-pressure.png" alt="">
              </template>
              <template #content>
                Pantau tekanan darah Anda dan pelajari cara mencegah komplikasi. Dapatkan saran tentang pola hidup sehat dan tanda-tanda bahaya.
              </template>
            </SpecialistCard>
          </div>

          <div class="carousel-item">
            <SpecialistCard :open-skeleton="openSkeleton" @is-open-skeleton="(state: boolean) => openSkeleton = state">
              <template #header>
                Kolesterol
              </template>
              <template #image>
                <img src="/cholesterol.png" alt="">
              </template>
              <template #content>
                Ketahui cara mengendalikan kadar kolesterol. Dapatkan saran pola makan sehat, olahraga, dan risiko yang harus diwaspadai.
              </template>
            </SpecialistCard>
          </div>

        </div>
    </div>
</template>