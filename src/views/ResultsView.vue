<script setup>
import { useQuizStore } from '../stores/quiz';

const quizStore = useQuizStore();
</script>

<template>
    <div class="d-flex justify-center align-center h-screen" style="overflow: hidden !important;">
        <v-card>
            <v-card-title>Your Result: {{ quizStore.score }} / {{ quizStore.questions.length }}</v-card-title>

            <v-card-text>
                <v-btn block color="blue" class="text-white" @click="quizStore.retake()">Re-Take Quiz</v-btn>
            </v-card-text>
        </v-card>
    </div>

</template>