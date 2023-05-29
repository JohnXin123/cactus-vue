<template>
   <div class="items-center h-screen bg-image flex justify-center w-full">
        <div class="text-center flex justify-center bg-white/50 backdrop-blur-2xl">
            <div class="ring-2 ring-slate-200 drop-shadow-sm w-[500px] py-10 rounded-2xl divide-y">
                <h1 class="text-slate-700 text-2xl uppercase pb-3 font-bold"><span class="text-blue-600">POS</span> Login</h1>
                <div class="py-6 px-10">
                    <!-- <div>
                        <p class="p-1 text-red-500 text-center">{{ errorMessage }}</p>
                    </div> -->
                    <form>
                        <div class="flex flex-col items-start gap-2">
                            <label for="" class="px-3 text-sm uppercase font-medium">Email</label>
                            <input type="email" class="ring-1 bg-slate-200 focus:outline-none w-full h-10 rounded-full px-6" placeholder="example@mail.com">
                            <!-- <span v-if="v$.input.email.$error" class="px-2 text-red-500">{{ v$.input.email.$errors[0].$message }}</span> -->
                        </div>
                        <div class="flex flex-col items-start gap-2 mt-6">
                            <label for="" class="px-3 text-sm uppercase font-medium">Password</label>
                            <input type="password" class="ring-1 bg-slate-200 focus:outline-none w-full h-10 
                            rounded-full px-6" placeholder="**********">
                            <!-- <span v-if="v$.input.password.$error" class="px-2 text-red-500">{{ v$.input.password.$errors[0].$message }}</span> -->
                        </div>
                        <div class="flex flex-col items-end gap-2 mt-3">
                            <a href="#" class="text-sm underline hover:text-blue-600 capitalize">forget your password.?</a>
                        </div>
                        <div class="flex flex-col items-start gap-2 mt-6">
                            <button type="submit" class="bg-blue-800 w-full p-3 text-slate-100 rounded-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg-image{

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23dae0ff' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    background-size: cover;
}
</style>