<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

//state
const user = defineProps({
    userLists: Array
});
const emit = defineEmits(['user-add-status', 'user-edit-status', 'user-delete-status']);
const userFilter = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});

//method
let clickAdd = () => emit('user-add-status')

let clickEdit = id => emit('user-edit-status', id)

let clickDelete = id => emit('user-delete-status', id)

</script>
<template>

    <head>
        <link rel="stylesheet" href="https://unpkg.com/primevue/resources/themes/saga-blue/theme.css" />
        <link rel="stylesheet" href="https://unpkg.com/primevue/resources/primevue.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
    </head>

     <DataTable :value="user.userLists" :paginator="true" :rows="5" showGridlines
        dataKey="id" stripedRows  :rowHover="true" v-model:filters="userFilter" filterDisplay="menu" 
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        :globalFilterFields="['name']" responsiveLayout="scroll">
        <template #header>
            <div class="flex justify-between items-center">

                <div>
                    <button class="bg-sky-600 text-slate-200 px-3 py-2 rounded-lg text-sm"  @click="clickAdd"><i class='bx bx-plus'></i> Add New</button>
                </div>

                <div><h5 class="text-sky-600 text-2xl">Users List</h5></div>

                <div>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="userFilter['global'].value" placeholder="Search..."/>
                    </span>
                </div>
            </div>
        </template>
        <template #empty>
            No Users found.
        </template>
        <template #loading>
            Loading Users. Please wait.
        </template>
        <ColumnComponent field="name" header="User Name"></ColumnComponent>
        <ColumnComponent field="email" header="User Email"></ColumnComponent>
        <ColumnComponent :exportable="true" style="min-width:8rem" header="Action">
            <template #body="slotProps">
                <div class="flex gap-1 items-center">
                    <button class="flex gap-2 items-center bg-sky-500 hover:bg-sky-700 cursor-pointer
                        px-3 py-2 text-sm text-slate-50 rounded-md" @click="clickEdit(slotProps.data.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        <span>Edit</span>
                    </button>
                    <button class="flex gap-2 items-center bg-red-500 hover:bg-red-700 cursor-pointer px-3 py-2 text-sm text-slate-50 rounded-md" @click="clickDelete(slotProps.data.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span>Remove</span>
                    </button>
                </div>
            </template>
        </ColumnComponent>
    </DataTable>
</template>