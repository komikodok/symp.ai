<script setup lang="ts">
    import { ref } from 'vue';
    import ModalError from './ModalError.vue';

    let isOpenModal = ref<boolean>(false);
</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start lg:w-72">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a class="btn justify-start bg-transparent border-transparent text-zinc-500 hover:text-sky-500 active:text-sky-500">Home</a></li>
                    <li><a class="btn justify-start bg-transparent border-transparent text-zinc-500 hover:text-sky-500 active:text-sky-500">About</a></li>
                </ul>
            </div>
            <a class="btn text-sky-700 border-transparent bg-transparent text-3xl lg:text-4xl font-bold">aidoc</a>
        </div>
        <div class="navbar-start w-full text-xl hidden lg:flex">
            <ul class="menu menu-horizontal menu-lg px-1">
                <li><a class="btn bg-transparent border-transparent text-zinc-400 hover:text-sky-500 active:text-sky-500">Home</a></li>
                <li><a class="btn bg-transparent border-transparent text-zinc-400 hover:text-sky-500 active:text-sky-500">About</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <button @click="isOpenModal = true" class="btn text-base-300 font-bold bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-700">Login</button>
        </div>
    </div>

    <ModalError :is-open-modal="isOpenModal"/>
</template>