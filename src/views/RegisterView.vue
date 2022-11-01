<script setup>
import { useLoginStore } from '../stores/login'
import { ref } from 'vue';

const loginStore = useLoginStore();

const data = ref({
    email: '',
    password: ''
});

const register = async () => {
    await loginStore.register(data);
}

</script>

<template>
    <v-app>
        <v-container>
            <v-col cols="12" class="py-12">
                <v-alert type="error" outlined dense v-if="loginStore.message">{{ loginStore.message }}</v-alert>
                <h2 class="text-center mb-5">Register</h2>
                <v-text-field label="E-mail" v-model="data.email"></v-text-field>
                <v-text-field label="Password" v-model="data.password" type="password"></v-text-field>
                <v-btn block color="blue text-white" @click="register()">Login</v-btn>
                <a href="/login" class="float-right mt-3">Sign In</a>

            </v-col>
        </v-container>
    </v-app>
</template>