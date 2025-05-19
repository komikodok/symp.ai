<script setup lang="ts">
import { motion } from 'motion-v';
</script>

<template>
    <motion.nav 
        :animate="{ y: [-100, 0], opacity: [0, 1]}"
        :transition="{ duration: 0.7 }"
        class="flex justify-between items-center w-full h-20 bg-gradient-to-b from-cyan-200/90 via-cyan-200/70 to-cyan-100/90 z-10"
    >
        <div 
            @click="() => navigateTo($route.fullPath)"
            class="font-bold opacity-100 text-2xl w-full text-center text-cyan-800 ml-4 cursor-pointer"
        >
            <span>
                Konsultasi {{ inject('collapseName') }}
            </span>
        </div>
        
        <div class="dropdown dropdown-end mr-4">
            <div tabindex="0" role="button" class="btn btn-ghost bg-transparent border-transparent m-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Arsipkan</a></li>
                <li><a class="text-red-500">Hapus</a></li>
            </ul>
        </div>
    </motion.nav>
</template>