import { defineStore } from 'pinia'
import { HTTP } from '@/service/http-common';
import { computed, ref } from 'vue';

export const useLoginStore = defineStore('login', () => {

    const isLogged = ref(false);

    const isLoggedIn = computed( () => isLogged.value);

    function authenticate() {

        return new Promise((resolve, reject) => {

            HTTP.get("category-list")
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
            });
    }

    // function testForPersist(value) {

    //     this.persistState(value);

    //     return 'success';
    // }

    // function persistState() {

    //     localStorage.setItem('counter', JSON.stringify(this.$state));
    // }

    return { isLoggedIn, authenticate};
})