<script setup>
import { useLoginStore } from '../stores/login'
import { ref } from 'vue';

const loginStore = useLoginStore();

const data = ref({
    email: '',
    password: ''
});

const login = async () => {
    await loginStore.login(data);
}

</script>

<template>
    <v-app>
        <v-container>
            <v-col cols="12" class="py-12">
                <v-alert type="error" outlined dense v-if="loginStore.message">{{ loginStore.message }}</v-alert>
                <h2 class="text-center mb-5">Login</h2>
                <v-text-field label="E-mail" v-model="data.email"></v-text-field>
                <v-text-field label="Password" v-model="data.password" type="password"></v-text-field>
                <v-btn block color="blue text-white" @click="login()">Login</v-btn>
                <a href="/register" class="float-right mt-3">Sign Up Here</a>
            </v-col>
        </v-container>
    </v-app>
</template>