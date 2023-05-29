<template>
    <div class="dashboard container mx-auto w-auto bg-white rounded-2xl">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            <h1>Dashboard</h1>
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