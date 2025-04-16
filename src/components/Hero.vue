<script setup lang="ts">

</script>

<template>
  <section class="pt-20 pb-8">
    <div class="mx-auto max-w-7xl items-center bg-base-100 p-6 rounded-2xl shadow-md">
      <div class="flex justify-between">
          <div class="md:w-3/5 max-w-2xl mx-auto">
            <h2 class="p-4 max-w-xl text-4xl font-bold text-sky-900 leading-relaxed">
              Konsultasi Kesehatan 24/7 Kapan Saja, Dimana Saja. <br/>
              <span class="text-sky-600">- Didukung oleh AI</span>
            </h2>
            <p class="p-4 max-w-xl my-3 text-zinc-700 text-lg font-semibold">Dapatkan bantuan medis dari AI untuk memahami gejala Anda, memberikan saran awal, dan menyarankan langkah selanjutnya.</p>
            <button class="btn btn-ghost justify-end m-4 font-semibold text-lg text-white bg-cyan-700 hover:bg-cyan-900 active:bg-cyan-900 border-transparent">Konsultasi sekarang</button>
          </div>
    
          <div class="w-96 hidden lg:flex justify-center mx-auto">
            <div class="flex m-4 overflow-hidden rounded-xl shadow-md bg-cyan-50">
                <img 
                  class="object-contain p-2 scale-230" 
                  src="/herodoc.png" 
                  alt="Ilustrasi Dokter AI" 
                />
            </div>
          </div>
      </div>

      <div class="w-full grid grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:my-8 justify-items-center">
        <div class="card card-dash bg-base-100 w-50 h-50 max-md:scale-80 border-1 border-zinc-200 shadow-sm shadow-gray-300">
            <div class="card-body">
                <div class="flex text-cyan-950 gap-2 justify-center text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="card-title">Cepat</h2>
                </div>
                <p class="text-xl text-cyan-950 flex justify-center my-4">Respon secepat kilat</p>
            </div>
        </div>
        <div class="card card-dash bg-base-100 w-50 h-50 max-md:scale-80 border-1 border-zinc-200 shadow-sm shadow-gray-300">
            <div class="card-body">
                <div class="flex text-cyan-950 gap-2 justify-center text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                    </svg>

                    <h2 class="card-title">24/7</h2>
                </div>
                <p class="text-xl text-cyan-950 flex justify-center my-4">Tersedia kapan saja</p>
            </div>
        </div>
        <div class="card card-dash bg-base-100 w-50 h-50 max-md:scale-80 border-1 border-zinc-200 shadow-sm shadow-gray-300">
            <div class="card-body">
                <div class="flex text-cyan-950 gap-2 justify-center text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="card-title">Gratis</h2>
                </div>
                <p class="text-xl text-cyan-950 flex justify-center my-4">Bebas biaya</p>
            </div>
        </div>
        <div class="card card-dash bg-base-100 w-50 h-50 max-md:scale-80 border-1 border-zinc-200 shadow-sm shadow-gray-300">
            <div class="card-body">
                <div class="flex text-cyan-950 gap-2 justify-center text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="card-title">Instan</h2>
                </div>
                <p class="text-xl text-cyan-950 flex justify-center my-4">Tanpa ribet</p>
            </div>
        </div>
      </div>

      <div class="md:p-8 p-4">
        <div class="bg-base-100 border-base-300 collapse collapse-arrow border">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-cyan-800 text-primary-content peer-checked:bg-cyan-950 peer-checked:text-secondary-content"
          >
            <strong>Penting</strong>
          </div>
          <div
            class="collapse-content font-semibold bg-cyan-800 text-primary-content peer-checked:bg-cyan-950 peer-checked:text-secondary-content"
          >
          “Perlu diingat, aplikasi ini bukan pengganti dokter, namun mampu memberikan saran awal berdasarkan referensi dari jurnal dan dokumen medis melalui teknologi RAG,
          tujuan awalnya adalah untuk media informasi dan bukan pengganti konsultan medis profesional. Konsultasikan ke dokter untuk penanganan yang tepat.”
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
