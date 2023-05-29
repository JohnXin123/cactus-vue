import { defineStore } from 'pinia'
import { HTTP } from '@/service/http-common';

export const useUserStore = defineStore('user', () => {

    function getUserLists() {
        return new Promise((resolve, reject) => {

            HTTP.get("users")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    function createUserList(name) {

        return new Promise((resolve, reject) => {
            
            const parameter = {
                name,
                email,
                password
            };

            HTTP.post("users/store", parameter)
            .then( response => resolve(response))
            .catch( error => reject(error));

        });
    }

    function editUserList(data) {

        return new Promise((resolve, reject) => {

            const parameter = {
                id: data.id,
                name: data.name,
                email: data.email
            };

            HTTP.put(`/users/update/${data.id}`, parameter)
            .then( response => resolve(response))
            .catch( error => reject(error));
        
        });
    }

    function deleteUserList(id) {

        return new Promise((resolve, reject) => {

            HTTP.delete(`users/destory/${id}`)
            .then( response => resolve(response))
            .catch( error => reject(error));

        });

    }

    return { getUserLists, createUserList, editUserList, deleteUserList };
})