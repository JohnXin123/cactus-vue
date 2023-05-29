<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';

const isloaded = ref(false);
const userStore = useUserStore();
const emit = defineEmits(['closeDeleteModel']);
const deleteId = defineProps({
    deleteId: Number
});

let removeUser = async () => {

    await userStore.deleteUserList(deleteId.deleteId)
    .then( () => {
        isloaded.value = false;
        emit('closeDeleteModel', 'deleted');
    })
    .catch( error => {
        console.log(error);
        toast.error('Axios Error');
        closeModel();
    });
};

let closeModel = () => emit('closeDeleteModel');

</script>

<template>
    <PreLoader :loaded="isloaded" />
    <div class="w-full h-screen bg-black/50 backdrop-blur-xs absolute z-10">
        <div class="flex justify-center items-center">
            <div class="bg-white mt-32 w-1/3 lg:p-10 md:p-5 text-center rounded-2xl drop-shadow-lg divide-y">
                <div  class="lg:py-2 md:py-1">
                  <span class="text-lg font-bold text-slate-700 uppercase">Remove User</span>                  
                </div>
                <div class="lg:py-4 md:py-1">
                    <p class="lg:p-4 md:p-2 text-red-600 font-medium">Are you sure do you want to remove this user?</p>
                    <div class="flex gap-4 lg:pt-4 md:pt-2">
                        <button class="lg:px-6 md:px-3 lg:py-2 md:py-1 bg-red-600 text-slate-100 w-full rounded-full uppercase" @click="removeUser">Remove</button>
                        <button class="lg:px-6 md:px-3 lg:py-2 md:py-1 bg-slate-900 text-slate-100 w-full rounded-full uppercase" @click="closeModel">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>