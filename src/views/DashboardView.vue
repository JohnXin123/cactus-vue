<template>
    <div class="dashboard container mx-auto w-auto bg-white rounded-2xl">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            <div class="bg-white p-4 rounded-xl ring-2 ring-slate-200 flex justify-between drop-shadow-lg">
                <div class="flex flex-col text-base">
                    <span class="text-slate-400 uppercase">Order</span>
                    <span class="text-slate-800 font-bold">152</span>
                    <p><span class="text-green-600">24 new</span> since last visit</p>
                </div>
                <div>
                    <i class='bx bx-cart bx-border text-sky-400 text-2xl'></i>
                </div>
            </div>
            <div class="bg-white p-8 ring-2 ring-slate-200 rounded-xl flex justify-between drop-shadow-lg">
                <div class="flex flex-col text-base">
                <span class="text-slate-400 uppercase">Order</span>
                <span class="text-slate-800 font-bold">152</span>
                <p><span class="text-green-600">24 new</span> since last visit</p>
                </div>
                <div>
                <i class='bx bx-cart bx-border text-sky-400 text-2xl'></i>
                </div>
            </div>
            <div class="bg-white p-8 ring-2 ring-slate-200 rounded-xl flex justify-between drop-shadow-lg">
                <div class="flex flex-col text-base">
                <span class="text-slate-400 uppercase">Order</span>
                <span class="text-slate-800 font-bold">152</span>
                <p><span class="text-green-600">24 new</span> since last visit</p>
                </div>
                <div>
                <i class='bx bx-cart bx-border text-sky-400 text-2xl'></i>
                </div>
            </div>
            <div class="bg-white p-8 ring-2 ring-slate-200 rounded-xl flex justify-between drop-shadow-lg">
                <div class="flex flex-col text-base">
                <span class="text-slate-400 uppercase">Order</span>
                <span class="text-slate-800 font-bold">152</span>
                <p><span class="text-green-600">24 new</span> since last visit</p>
                </div>
                <div>
                <i class='bx bx-cart bx-border text-sky-400 text-2xl'></i>
                </div>
            </div>
        </div>
        <div class="mt-10 flex justify-start gap-3">
            <button class="p-3 rounded-lg ring-2 ring-teal-300" @click="clickme">Add</button>
            <button class="p-3 rounded-lg ring-2 ring-teal-300" @click="getPersist">Get</button>
        </div>
    </div>
</template>
<style scoped>
.dashboard {
    position: absolute;
    top: 12%;
    left: 20%;
    right: 2%;
    padding: 2%;
    height: calc(100vh - 9rem);
}

@media(max-width:1024px) {
  .dashboard{
    top: 13%;
  }
  
}

@media(max-width:768px) {
  .dashboard{
    left: 15%;
  }
}
</style>