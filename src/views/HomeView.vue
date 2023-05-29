<script setup>
import Sidebar from '@/components/layout/SidebarComponent.vue';
import Menu from '@/components/layout/MenuComponent.vue';
</script>

<template>
  <Menu />
  <div class="min-h-screen bg-slate-300 relative">
    <Sidebar />
    <RouterView />
  </div>
</template>