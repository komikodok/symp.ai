<script setup="lang">
import { motion } from 'motion-v';


</script>

<template>
    <div class="flex relative m-4">
        <div class="absolute bottom-10 grid grid-cols-2 border w-full h-full">
            <div class=" aspect-square border"></div>
            <div class=" aspect-square border"></div>
            <div class=" aspect-square border"></div>
            <div class=" aspect-square border"></div>
        </div>
        <div class="flex overflow-hidden shadow-md rounded-full">
            <img 
                class="object-contain p-2 scale-230" 
                src="/herodoc.png" 
                alt="Ilustrasi Dokter AI" 
            />
        </div>
    </div>
</template>