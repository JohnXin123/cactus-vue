<script setup>
import UserListComponent from '@/components/User/UserListComponent.vue'
import UserCreateComponent from '@/components/User/UserCreateComponent.vue'
import UserEditComponent from '@/components/User/UserEditComponent.vue'
import UserDeleteComponent from '@/components/User/UserDeleteComponent.vue'
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useToast } from "vue-toastification";

//Data
const userLists = ref([]);
const userEdit = ref({});
const userDeleteId = ref();
const isShow = ref(false);
const isEdit = ref(false);
const isDelete = ref(false);
const toast = useToast();
const userStore = useUserStore();
const isloaded = ref(false);

//Mounted
onMounted( () => {
    getUserLists();
})

//Methods
let getUserLists = async () => {
  isloaded.value = true;
  await userStore.getUserLists()
  .then( response => {
    userLists.value = response.data.data;
    isloaded.value = false;
  })
  .catch( error => toast.error(error.message));
}

let showAddModel = () => isShow.value = true;

let showEditModel = editId => {

  userEdit.value = userLists.value.find( item => item.id == editId );

  isEdit.value = true;

}; 

let showDeleteModel = deleteId => {

  userDeleteId.value = deleteId;

  isDelete.value = true;

}

let closeModel = (status=false) => {

  if(status) toast.success(`Successfully ${status} user.`);

  isShow.value = isEdit.value = isDelete.value = false;

  getUserLists();
}

</script>

<template>

  <PreLoader :loaded="isloaded" />

  <div class="user container mx-auto w-auto bg-white rounded-2xl" style="height: calc(100vh - 7rem);">
      <div class="mt-4 p-3 rounded-lg container">
          <UserListComponent 
          :userLists="userLists" 
          @user-add-status="showAddModel" 
          @user-edit-status="showEditModel"
          @user-delete-status="showDeleteModel"/>
      </div>
  </div>

  <UserCreateComponent v-if="isShow" @user-close-status="closeModel"/>

  <UserEditComponent v-if="isEdit" @user-edit-close-status="closeModel" :editUserData="userEdit"/>

  <UserDeleteComponent v-if="isDelete" @closeDeleteModel="closeModel" :deleteId="userDeleteId"/>
    
</template>

<style scoped>
.user {
    position: absolute;
    top: 12%;
    left: 20%;
    right: 2%;
    padding: 2%;
    height: calc(100vh - 9rem);
}

@media(max-width:1024px) {
  .user{
    top: 13%;
  }
  
}

@media(max-width:768px) {
  .user{
    left: 15%;
  }
}
</style>