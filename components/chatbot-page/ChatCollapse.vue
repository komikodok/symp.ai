<script setup lang="ts">
import slugify from 'slugify';

const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const collapse = target.innerText.trim();
    const diseasesSlug = slugify(collapse, { lower: true });

    navigateTo(`/konsultasi/${diseasesSlug}`);
};
</script>

<template>
    <div class="overflow-y-scroll">
        <ul class="w-full flex flex-col gap-6 p-4">
            <!-- Spesialis Dalam -->
            <li class="collapse collapse-arrow rounded-xl shadow-md ">
                <input type="checkbox" class="peer" />
                <div
                    class="collapse-title bg-base-100 font-semibold   text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
                >
                    🩺 Poli Dalam
                </div>
                <ul
                    class="collapse-content flex flex-col gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
                >
                    <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100  ">Diabetes</li>
                    <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100  ">Darah Tinggi</li>
                    <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100  ">Kolesterol</li>
                </ul>
            </li>
    
            <!-- Spesialis Jantung -->
            <li class="collapse collapse-arrow rounded-xl shadow-md ">
                <input type="checkbox" class="peer" />
                <div
                    class="collapse-title bg-base-100 font-semibold   text-neutral peer-checked:bg-sky-300 rounded-t-Jantungxl"
                >
                    🩺 Poli Jantung
                </div>
                <ul
                    class="collapse-content flex flex-col gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
                >
                    <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100">Jantung</li>
                </ul>
            </li>
    
            <!-- Spesialis Paru -->
            <li class="collapse collapse-arrow rounded-xl shadow-md ">
                <input type="checkbox" class="peer" />
                <div
                    class="collapse-title bg-base-100 font-semibold   text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
                >
                    🩺 Poli Paru
                </div>
                <ul
                    class="collapse-content flex flex-col gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
                >
                    <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100  ">Paru-paru</li>
                </ul>
            </li>
    
            <!-- Spesialis Kulit -->
            <li class="collapse collapse-arrow rounded-xl shadow-md ">
                <input type="checkbox" class="peer" />
                <div
                    class="collapse-title bg-base-100 font-semibold   text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
                >
                    🩺 Poli Kulit
                </div>
                <ul
                    class="collapse-content flex flex-col gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
                >
                    <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100  ">Kulit</li>
                </ul>
            </li>
    
            <!-- Spesialis Onkologi -->
            <li class="collapse collapse-arrow rounded-xl shadow-md ">
                <input type="checkbox" class="peer" />
                <div
                    class="collapse-title bg-base-100 font-semibold   text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
                >
                    🩺 Poli Onkologi
                </div>
                <ul
                    class="collapse-content flex flex-col gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
                >
                    <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100  ">Kanker</li>
                </ul>
            </li>
           
        </ul>
    </div>
</template>