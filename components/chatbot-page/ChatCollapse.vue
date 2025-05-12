<script setup lang="ts">
const emit = defineEmits<{
  (e: 'select-carousel', name: string): void;
}>();

const handleClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  emit('select-carousel', target.innerText.trim());
};
</script>

<template>
    <ul class="w-full h-full flex flex-col gap-7 lg:gap-4 p-4">
        <!-- Specialist 1 -->
        <li class="collapse collapse-arrow rounded-xl shadow-md max-lg:p-2">
            <input type="checkbox" class="peer" />
            <div
                class="collapse-title bg-base-100 font-semibold max-lg:text-4xl max-lg:p-8 text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
            >
                🩺 Poli Dalam
            </div>
            <ul
                class="collapse-content flex flex-col gap-5 lg:gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
            >
                <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100 max-lg:text-3xl max-lg:p-4">Diabetes</li>
                <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100 max-lg:text-3xl max-lg:p-4">Darah Tinggi</li>
                <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100 max-lg:text-3xl max-lg:p-4">Kolesterol</li>
            </ul>
        </li>

        <!-- Specialist 2 -->
        <li class="collapse collapse-arrow rounded-xl shadow-md max-lg:p-2">
            <input type="checkbox" class="peer" />
            <div
                class="collapse-title bg-base-100 font-semibold max-lg:text-4xl max-lg:p-8 text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
            >
                🩺 Poli Jantung
            </div>
            <ul
                class="collapse-content flex flex-col gap-5 lg:gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
            >
                <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100 max-lg:text-3xl max-lg:p-4">Penyakit Jantung</li>
            </ul>
        </li>

        <!-- Specialist 3 -->
        <li class="collapse collapse-arrow rounded-xl shadow-md max-lg:p-2">
            <input type="checkbox" class="peer" />
            <div
                class="collapse-title bg-base-100 font-semibold max-lg:text-4xl max-lg:p-8 text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
            >
                🩺 Poli Paru
            </div>
            <ul
                class="collapse-content flex flex-col gap-5 lg:gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
            >
                <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100 max-lg:text-3xl max-lg:p-4">Penyakit Paru-paru</li>
            </ul>
        </li>

        <!-- Specialist 4 -->
        <li class="collapse collapse-arrow rounded-xl shadow-md max-lg:p-2">
            <input type="checkbox" class="peer" />
            <div
                class="collapse-title bg-base-100 font-semibold max-lg:text-4xl max-lg:p-8 text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
            >
                🩺 Poli Kulit
            </div>
            <ul
                class="collapse-content flex flex-col gap-5 lg:gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
            >
                <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100 max-lg:text-3xl max-lg:p-4">Penyakit Kulit</li>
            </ul>
        </li>

        <!-- Specialist 5 -->
        <li class="collapse collapse-arrow rounded-xl shadow-md max-lg:p-2">
            <input type="checkbox" class="peer" />
            <div
                class="collapse-title bg-base-100 font-semibold max-lg:text-4xl max-lg:p-8 text-neutral peer-checked:bg-sky-300 rounded-t-2xl"
            >
                🩺 Poli Onkologi
            </div>
            <ul
                class="collapse-content flex flex-col gap-5 lg:gap-2 bg-base-100 text-neutral peer-checked:text-neutral"
            >
                <li @click="handleClick" class="p-1 cursor-pointer hover:bg-gray-100 active:bg-gray-100 max-lg:text-3xl max-lg:p-4">Kanker</li>
            </ul>
        </li>
       
    </ul>
</template>