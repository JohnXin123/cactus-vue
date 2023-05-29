import { defineStore } from 'pinia'
import { HTTP } from '@/service/http-common';
import { computed, ref } from 'vue';

export const useLoginStore = defineStore('login', () => {

    const isLogged = ref(JSON.parse(localStorage.getItem('isLogged')) || false);

    const token = ref(localStorage.getItem('token') || null);

    let isLoggedIn = computed( () => isLogged.value);

    let tokenValue = computed( () => 'Bearer ' + token.value);

    function authenticate(input) {

        return new Promise((resolve, reject) => {

            const parameter = {
                email : input.value.email,
                password : input.value.password,
            };

            HTTP.post("api/v1/authenticate", parameter)
                .then((response) => {

                    localStorage.setItem('isLogged', true);
                    localStorage.setItem('token', response.data.data);

                    isLogged.value = true;
                    tokenValue.value = response.data.data;

                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
            });
    }

    function register(input) {

        return new Promise((resolve, reject) => {

            const parameter = {
                name : input.value.name,
                email : input.value.email,
                password : input.value.password,
                password_confirmation: input.value.confirmPassword,
            };

            HTTP.post("api/v1/register", parameter)
            .then( response => resolve(response))
            .catch( error => reject(error));

        });
    }

    function logout() {

        return new Promise((resolve, reject) => {

            HTTP.post("api/v1/logout")
            .then((response) => {

                localStorage.setItem('isLogged', false);
                localStorage.setItem('token', "");

                isLogged.value = false;
                tokenValue.value = "";

                resolve(response);
            })
            .catch( error => reject(error));

        });
    }

    return { isLoggedIn,tokenValue, authenticate, register,logout};
})