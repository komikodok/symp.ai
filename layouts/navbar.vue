<script setup lang="ts">
</script>

<template>
    <div class="navbar bg-base-100 shadow-sm fixed z-20">
        <div class="navbar-start lg:w-72">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    <RouterLink 
                        v-for="(link, index) in [
                            {name: 'Beranda', to: '/'},
                            {name: 'Layanan', to: '/services'},
                        ]"
                        :key="index"
                        :to="link.to"
                        :class="[
                            'btn justify-start bg-transparent border-transparent text-zinc-500 hover:text-sky-500 active:text-sky-500',
                            $route.path === link.to && '!text-sky-500'
                        ]"
                    >
                        {{ link.name }}
                    </RouterLink>
                </ul>
            </div>
            <a href="/" class="lg:ml-auto cursor-pointer w-28 lg:w-24 flex">
                <img src="/logo.png" alt="Logo sanoai" class="m-auto">
            </a>
        </div>
        <div class="navbar-start w-full text-xl hidden lg:flex">
            <ul class="menu menu-horizontal menu-lg px-1">
                <RouterLink 
                    v-for="(link, index) in [
                        {name: 'Beranda', to: '/'},
                        {name: 'Layanan', to: '/services'},
                    ]"
                    :key="index"
                    :to="link.to"
                    :class="[
                        'btn bg-transparent border-transparent text-lg text-zinc-400 hover:text-sky-500 active:text-sky-500',
                        $route.path === link.to && '!text-sky-500'
                    ]"
                >
                    {{ link.name }}
                </RouterLink>
            </ul>
        </div>
        <div class="navbar-end gap-3">
            <button class="flex gap-1 bg-transparent border-transparent cursor-pointer text-cyan-800 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                Masuk
            </button>
            <button class="btn text-base-300 font-bold bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-700">Daftar</button>
        </div>
    </div>

    <slot />

</template>