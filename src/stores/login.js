import { defineStore } from "pinia";
import { auth } from '../firebase.config'
import * as fb from 'firebase/auth'
import router from "../router";

const state = () => ({
    loggedIn: false,
    user_data: [],
    message: null
});

const getters = {
    user: (state) => {
        return JSON.parse(localStorage.getItem('user_data'))
    }
};

const actions = {
    async login(data) {
        try {
            const response = await fb.signInWithEmailAndPassword(auth, data.value.email, data.value.password);
            if (response.user) {
                this.user_data = response.user.reloadUserInfo;
                this.loggedIn = true;

                localStorage.setItem('loggedIn', true);
                localStorage.setItem('user_data', JSON.stringify(response.user.reloadUserInfo))

                router.push('/');
            }
        } catch (error) {
            this.message = 'Wrong Credentials'
            setTimeout(() => {
                this.message = null
            }, 1500)
        }


    },

    async register(data) {

        try {
            const response = await fb.createUserWithEmailAndPassword(auth, data.value.email, data.value.password);
            if (response.user) {
                this.user_data = response.user.reloadUserInfo;
                this.loggedIn = true;

                localStorage.setItem('loggedIn', true);
                localStorage.setItem('user_data', JSON.stringify(response.user.reloadUserInfo))

                location.href = "/"
            }
        } catch (error) {
            this.message = 'Please Fill out Required Fields'
            setTimeout(() => {
                this.message = null
            }, 1500)
        }

    },

    async logout() {
        localStorage.clear();

        router.push('/login');
    }
};

export const useLoginStore = defineStore('loginStore', {
    state,
    actions,
    getters
})