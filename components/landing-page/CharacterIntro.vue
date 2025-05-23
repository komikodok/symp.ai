<script setup lang="ts">
import { motion } from 'motion-v';
</script>

<template>
    <!-- 1 -->
    <div class="flex max-w-7xl h-auto mx-auto">
        <div class="w-62 h-62 lg:w-72 lg:h-72 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center">
            <motion.img
                :initial="{ y: 100, opacity: 0}"
                :while-in-view="{ y: 0, opacity: 1 }" 
                :transition="{ duration: 0.3 }"
                class="object-contain pointer-events-none p-2" 
                src="/4.png" 
                alt="Avatar" 
                draggable="false"
            />
        </div>

        <div class="lg:max-w-[42rem] max-w-lg">
            <motion.div
                :initial="{ x: -100, opacity: 0 }"
                :while-in-view="{ x: 0, opacity: 1}"
                class="chat chat-start"
            >
                <div class="chat-bubble bg-cyan-500 text-base-100">
                    Tahukah kamu? Dengan Symp, kamu bisa berkonsultasi tentang gejala kesehatan tanpa harus antre di klinik.
                </div>
            </motion.div>
        </div>
    </div>

    <!-- 2 -->
    <div class="flex max-w-7xl h-auto mx-auto justify-end mt-6">
        <div class="lg:max-w-[42rem] max-w-lg">
            <motion.div
                :initial="{ x: 100, opacity: 0 }"
                :while-in-view="{ x: 0, opacity: 1}"
                class="chat chat-end"
            >
                <div class="chat-bubble chat-bubble-primary">
                    Wah keren! aku bisa konsultasi kesehatan dan dapat second opinion ya?
                </div>
            </motion.div>
        </div>

        <div class="w-62 h-62 lg:w-72 lg:h-72 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center">
            <motion.img
                :initial="{ y: 100, opacity: 0}"
                :while-in-view="{ y: 0, opacity: 1 }" 
                :transition="{ duration: 0.3 }"
                class="object-contain pointer-events-none p-2" 
                src="/3.png" 
                alt="Avatar 2" 
                draggable="false"
            />
        </div>
    </div>

    <!-- 3 -->
    <div class="flex max-w-7xl h-auto mx-auto">
        <div class="w-62 h-62 lg:w-72 lg:h-72 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center">
            <motion.img
                :initial="{ y: 100, opacity: 0}"
                :while-in-view="{ y: 0, opacity: 1 }" 
                :transition="{ duration: 0.3 }"
                class="object-contain pointer-events-none p-2" 
                src="/4.png" 
                alt="Avatar" 
                draggable="false"
            />
        </div>

        <div class="lg:max-w-[42rem] max-w-lg">
            <motion.div
                :initial="{ x: -100, opacity: 0 }"
                :while-in-view="{ x: 0, opacity: 1}"
                class="chat chat-start"
            >
                <div class="chat-bubble bg-cyan-500 text-base-100">
                    Tepat! Ini solusi cepat buat deteksi awal dan konsultasi ringan.
                </div>
            </motion.div>
        </div>
    </div>

    <br>
</template>
