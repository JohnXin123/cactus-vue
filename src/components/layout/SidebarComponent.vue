<template>
  <div class="sidebar bg-white rounded-2xl p-6 drop-shadow-sm ring-1 ring-slate-300 overflow-hidden">
    <div class="divide-y">
      <div class="flex gap-3 flex-col py-2">
          <router-link :to="{ name: 'dashboard' }">
            <div class="flex items-center gap-2 cursor-pointer py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-slate-500 h-6 max-[768px]:mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span class="text-slate-900 text-lg max-[1024px]:text-sm max-[768px]:hidden">Dashboard</span>
            </div>
          </router-link>
        
          <router-link :to="{ name: 'users' }">
            <div class="flex items-center gap-2 cursor-pointer py-1"> 
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>

              <span class="text-slate-900 text-lg max-[1024px]:text-sm max-[768px]:hidden">User Lists</span>
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