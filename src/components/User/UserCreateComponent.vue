<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/userStore'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const name = ref('');
const email = ref('');
const password = ref('');
const isloaded = ref(false);
const toast = useToast();
const emit = defineEmits(['user-close-status']);
const userStore = useUserStore();

const validations = {
    name: {required: helpers.withMessage('The name field is required', required)},
    email: {required: helpers.withMessage('The email field is required', required)},
    password: {required: helpers.withMessage('The password field is required', required)}
};

const v$ = useVuelidate(validations, { name });


let storeUser = async () => {
    const isFormatCorrect = await v$.value.$validate();
    
    if(isFormatCorrect){
        isloaded.value = true;
        await userStore.createUserList(name.value)
        .then( () => {
            isloaded.value = false;
            emit('user-close-status', 'created');
        } )
        .catch( error => {
            console.log(error);
            toast.error('Axios Error');
            closeModel();
        })
    }
   
}

let closeModel = () => emit('user-close-status');

</script>

<template>
    <PreLoader :loaded="isloaded" />
    <div class="w-full h-screen bg-black/50 backdrop-blur-xs absolute z-10">
        <div class="flex justify-center items-center">
                <div class="bg-white mt-32 w-1/3 px-10 py-10 text-center rounded-2xl drop-shadow-lg divide-y">
                    <form @submit.prevent="storeUser" method="POST">
                    <div  class="py-2">
                        <span class="text-lg font-bold text-slate-700 uppercase">Create User</span>    
                        <span class="font-extrabold absolute select-none lg:top-5 lg:right-5 top-2 right-2 cursor-pointer" @click="closeModel">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>               
                    </div>
                    <div class="py-4">
                        <div class="flex flex-col items-start pb-3">
                            <label for="" class="px-3 p-2">Name</label>
                            <input type="text" v-model="name" class="w-full bg-slate-200 px-4 ring-1 rounded-full focus:outline-none h-10"
                            placeholder="Enter User Name">
                            <p v-if="v$.name.$error" class="text-red-500 mx-auto mt-1">{{ v$.name.$errors[0].$message }}</p>
                        </div>

                        <div class="flex flex-col items-start pb-3">
                            <label for="" class="px-3 p-2">Email</label>
                            <input type="text" v-model="email" class="w-full bg-slate-200 px-4 ring-1 rounded-full focus:outline-none h-10"
                            placeholder="Enter User Name">
                            <p v-if="v$.email.$error" class="text-red-500 mx-auto mt-1">{{ v$.email.$errors[0].$message }}</p>
                        </div>
                    
                        <div class="flex gap-4 pt-4">
                            <button type="submit" class="px-6 py-2 bg-green-600 text-slate-100 w-full rounded-full uppercase">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>