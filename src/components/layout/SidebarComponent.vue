<template>
    
      <div class="sidebar bg-white rounded-2xl p-6 drop-shadow-sm ring-1 ring-slate-300 overflow-hidden">
        <div class="divide-y">
          <div class="flex gap-3 flex-col py-2">
              <div class="flex items-center gap-2 cursor-pointer py-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-slate-500 h-6 max-[768px]:mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span class="text-slate-900 text-lg max-[1024px]:text-sm max-[768px]:hidden">Dashboard</span>
              </div>
           
              <router-link :to="{ name: 'category' }">
                <div class="flex items-center gap-2 cursor-pointer py-1"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-slate-500 h-6 max-[768px]:mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span class="text-slate-900 text-lg max-[1024px]:text-sm max-[768px]:hidden">Category</span>
                </div>
              </router-link>

              <router-link :to="{ name: 'brand' }">
                <div class="flex items-center gap-2 cursor-pointer py-1"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-slate-500 h-6 max-[768px]:mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span class="text-slate-900 text-lg max-[1024px]:text-sm max-[768px]:hidden">Brand</span>
                </div>
              </router-link>

              <router-link :to="{ name: 'delivery' }">
                <div class="flex items-center gap-2 cursor-pointer py-1"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-slate-500 h-6 max-[768px]:mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span class="text-slate-900 text-lg max-[1024px]:text-sm max-[768px]:hidden">Delivery</span>
                </div>
              </router-link>

              <router-link :to="{ name: 'item' }">
                <div class="flex items-center gap-2 cursor-pointer py-1"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-slate-500 h-6 max-[768px]:mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span class="text-slate-900 text-lg max-[1024px]:text-sm max-[768px]:hidden">Item</span>
                </div>
              </router-link>
          </div>
        </div>
      </div>
    
</template>
<style scoped>
.sidebar{
    width: 15%;
    position: fixed;
    height: calc(100vh - 7rem);
    top: 12%;
    left: 3%;
    overflow: auto;
}

@media(max-width:1024px) {
  .sidebar{
    top: 13%;
  }
  
}

@media(max-width:768px) {
  .sidebar{
    width: 10%;
  }
}

::-webkit-scrollbar{
    width: 0;
}
</style>