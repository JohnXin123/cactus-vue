<script setup>
import { ref } from "vue"
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'vue-toastification'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const user = defineProps({
    editUserData: Object
});
const emit = defineEmits(['user-edit-close-status']);
const userStore = useUserStore();
const toast = useToast();
const isloaded = ref(false);
const editName = ref(user.editUserData.name);
const editEmail = ref(user.editUserData.email);
const password = ref();
const confirmPassword = ref();

const validations = {
    editName: {required: helpers.withMessage('The name field is required', required)},
    editEmail: {required: helpers.withMessage('The email field is required', required)}
};

const v$ = useVuelidate(validations, { editName,editEmail });

let updateUser = async () => {

    const isFormatCorrect = await v$.value.$validate();

    if(isFormatCorrect){
        isloaded.value = true;
        let parameter = {
            name: editName.value,
            email: editEmail.value,
            id: user.editUserData.id,
            password: password.value,
            confirmPassword: confirmPassword.value,
        };
        await userStore.editUserList(parameter)
        .then( () => {
            isloaded.value = false;
            emit('user-edit-close-status', 'updated');
        })
        .catch( error => {
            console.log(error);
            toast.error('Axios Error');
            closeModel();
        })
    }
   
}

let closeModel = () => emit('user-edit-close-status');

</script>

<template>
    <PreLoader :loaded="isloaded" />
    <div class="w-full h-screen bg-black/50 backdrop-blur-xs absolute z-10">
        <div class="flex justify-center items-center">
            <div class="bg-white mt-32 w-1/3 lg:p-10 p-5 text-center rounded-2xl drop-shadow-lg divide-y">
                <form @submit.prevent="updateUser" method="PUT">
                    <div  class="py-2">
                        <span class="text-lg font-bold text-slate-700 uppercase">Update User</span>       
                        <span class="font-extrabold absolute select-none lg:top-3 lg:right-3 top-1 right-1 cursor-pointer" @click="closeModel">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>           
                    </div>
                    <div class="py-4">
                        <div class="flex flex-col items-start pb-3">
                            <label for="" class="px-3 p-2">Name</label>
                            <input type="text" v-model="editName" class="w-full bg-slate-200 px-4 ring-1 rounded-full focus:outline-none h-10"
                            placeholder="Enter  Name">
                            <span v-if="v$.editName.$error" class="px-2 text-red-500">{{ v$.editName.$errors[0].$message }}</span>
                        </div>

                        <div class="flex flex-col items-start pb-3">
                            <label for="" class="px-3 p-2">Email</label>
                            <input type="text" v-model="editEmail" class="w-full bg-slate-200 px-4 ring-1 rounded-full focus:outline-none h-10"
                            placeholder="Enter Email">
                            <span v-if="v$.editEmail.$error" class="px-2 text-red-500">{{ v$.editEmail.$errors[0].$message }}</span>
                        </div>
                        
                        <div class="flex flex-col items-start gap-2 mt-6">
                            <label for="" class="px-3 text-sm uppercase font-medium">Password</label>
                            <input type="password" class="ring-1 bg-slate-200 focus:outline-none w-full h-10 
                            rounded-full px-6" placeholder="**********" v-model="password">
                        </div>

                        <div class="flex flex-col items-start gap-2 mt-6">
                            <label for="" class="px-3 text-sm uppercase font-medium">Confirm Password</label>
                            <input type="password" class="ring-1 bg-slate-200 focus:outline-none w-full h-10 
                            rounded-full px-6" placeholder="**********" v-model="confirmPassword">
                        </div>
                        
                        <div class="flex gap-4 pt-4">
                            <button type="submit" class="px-6 py-2 bg-green-600 text-slate-100 w-full rounded-full uppercase">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>