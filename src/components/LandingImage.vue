<script setup lang="ts">
import { motion } from 'motion-v';
</script>

<template>
    <div class="flex relative top-3 m-4">
        <motion.div 
            :animate="{ x: [0, -60, -30, 20, 0], y: [0, -70, 10, 5, 0] }"
            :transition="{
                duration: 5,
                delay: 1,
                ease: 'linear',
                repeat: 1
            }"
            class="absolute top-18 right-72 rounded-full bg-sky-100 blur-sm w-42 h-42" />
        <motion.div 
            :animate="{ x: [0, 50, 80, -30, 0], y: [0, -60, -10, -30, 0] }"
            :transition="{
                duration: 5,
                delay: 1,
                ease: 'linear',
                repeat: 1
            }"
            class="absolute bottom-34 left-32 rounded-full bg-sky-100 blur-sm w-60 h-60" />
        <motion.div 
            :animate="{ x: [-3, 5, 10, -20, 0], y: [-3, -10, -20, -20, 0] }"
            :transition="{
                duration: 5,
                delay: 1,
                ease: 'linear',
                repeat: 1
            }"
            class="absolute bottom-0 right-14 rounded-full bg-sky-200 blur-sm w-72 h-72" />
        <motion.div 
            :animate="{ x: [0, -5, 10, 0], y: [0, -7, 10, 5, 0] }"
            :transition="{
                duration: 5,
                delay: 1,
                ease: 'linear',
            }"
            class="absolute bottom-0 right-14 grid grid-cols-2 rounded-full w-72 h-72"
        >
            <div class="w-25 h-25 flex tooltip tooltip-bottom tooltip-primary -translate-x-20 -translate-y-20 bg-base-100 rounded-full border-2 border-cyan-700 m-auto z-10"  data-tip="Tanpa biaya">
                <div class="flex text-cyan-950 gap-2 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="card-title">Gratis</h2>
                </div>
            </div>

            <div class="w-25 h-25 scale-90 flex tooltip tooltip-bottom tooltip-primary translate-x-20 bg-base-100 rounded-full border-2 border-cyan-700 m-auto z-10" data-tip="Tersedia kapan saja">
                <div class="flex text-cyan-950 gap-2 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                    </svg>

                    <h2 class="card-title">24/7</h2>
                </div>
            </div>

            <div class="w-25 h-25 scale-80 flex tooltip tooltip-top tooltip-primary -translate-x-30 bg-base-100 rounded-full border-2 border-cyan-700 m-auto z-10" data-tip="Respon secepat kilat">
                <div class="flex text-cyan-950 gap-2 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="card-title">Cepat</h2>
                </div>
            </div>

        </motion.div>
        <div class="flex -translate-x-7 translate-y-5 overflow-hidden">
            <img 
                class="object-contain scale-120 pointer-events-none p-2 -z-10" 
                src="/1.png" 
                alt="Avatar" 
                draggable="false"
            />
        </div>
    </div>
</template>