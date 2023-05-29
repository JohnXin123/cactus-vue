<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/userStore'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const input = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const isloaded = ref(false);
const toast = useToast();
const emit = defineEmits(['user-close-status']);
const userStore = useUserStore();

const validations = {
    input: {
        name: { required: helpers.withMessage('The name field is required', required) },
        email: { required: helpers.withMessage('The email field is required', required) },
        password: { required: helpers.withMessage('The password field is required', required) },
        confirmPassword: { required: helpers.withMessage('The confirmPassword field is required', required) },
    },
};

const v$ = useVuelidate(validations, { input });

const resetValidation = () => {
  for (const field in v$.$v.input.$each) {
    if (v$.$v.input[field]) {
      v$.$v.input[field].$touch();
      v$.$v.input[field].$reset();
    }
  }
};  

const clearForm = async () => {
    input.value = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
  await nextTick()
  v$.value.$reset()
};


let storeUser = async () => {
    const isFormatCorrect = await v$.value.$validate();
    
    if(isFormatCorrect){
        isloaded.value = true;
        await userStore.createUserList(input)
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
                            <input type="text" v-model="input.name" class="w-full bg-slate-200 px-4 ring-1 rounded-full focus:outline-none h-10"
                            placeholder="Enter User Name">
                            <p v-if="v$.input.name.$error" class="text-red-500 mx-auto mt-1">{{ v$.input.name.$errors[0].$message }}</p>
                        </div>

                        <div class="flex flex-col items-start pb-3">
                            <label for="" class="px-3 p-2">Email</label>
                            <input type="text" v-model="input.email" class="w-full bg-slate-200 px-4 ring-1 rounded-full focus:outline-none h-10"
                            placeholder="Enter User Name">
                            <p v-if="v$.input.email.$error" class="text-red-500 mx-auto mt-1">{{ v$.input.email.$errors[0].$message }}</p>
                        </div>

                        <div class="flex flex-col items-start gap-2 mt-6">
                            <label for="" class="px-3 text-sm uppercase font-medium">Password</label>
                            <input type="password" class="ring-1 bg-slate-200 focus:outline-none w-full h-10 
                            rounded-full px-6" placeholder="**********" v-model="input.password">
                            <span v-if="v$.input.password.$error" class="text-red-500 mx-auto mt-1">{{ v$.input.password.$errors[0].$message }}</span>
                        </div>
                        <div class="flex flex-col items-start gap-2 mt-6">
                            <label for="" class="px-3 text-sm uppercase font-medium">Confirm Password</label>
                            <input type="password" class="ring-1 bg-slate-200 focus:outline-none w-full h-10 
                            rounded-full px-6" placeholder="**********" v-model="input.confirmPassword">
                            <span v-if="v$.input.confirmPassword.$error" class="text-red-500 mx-auto mt-1">{{ v$.input.confirmPassword.$errors[0].$message }}</span>
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