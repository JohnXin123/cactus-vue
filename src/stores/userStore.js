import { defineStore } from 'pinia'
import { HTTP } from '@/service/http-common';

export const useUserStore = defineStore('user', () => {

    function getUserLists() {
        return new Promise((resolve, reject) => {

            HTTP.get("api/v1/users")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    function createUserList(input) {

        return new Promise((resolve, reject) => {
            
            const parameter = {
                name : input.value.name,
                email : input.value.email,
                password : input.value.password,
                password_confirmation: input.value.confirmPassword,
            };

            HTTP.post("api/v1/users", parameter)
            .then( response => resolve(response))
            .catch( error => reject(error));

        });
    }

    function editUserList(data) {

        return new Promise((resolve, reject) => {

            const parameter = {
                id: data.id,
                name: data.name,
                email: data.email,
                password : data.password,
                password_confirmation: data.confirmPassword,
            };

            HTTP.put(`api/v1/users/${data.id}`, parameter)
            .then( response => resolve(response))
            .catch( error => reject(error));
        
        });
    }

    function deleteUserList(id) {

        return new Promise((resolve, reject) => {

            HTTP.delete(`api/v1/users/${id}`)
            .then( response => resolve(response))
            .catch( error => reject(error));

        });

    }

    return { getUserLists, createUserList, editUserList, deleteUserList };
})