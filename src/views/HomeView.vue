<script setup>
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core';
import { useQuizStore } from '../stores/quiz';

const quizStore = useQuizStore();

onMounted(async () => {
  await quizStore.fetchQuestions();
})

</script>

<template>
  <div class="d-flex justify-center align-center h-screen" v-if="quizStore.loading">
    <v-progress-circular :size="100" color="blue" indeterminate></v-progress-circular>
  </div>

  <div v-else>
    <v-card :title="q.question" :subtitle="`Category: ${q.category}`" class="mt-5" elevation="3"
      v-for="(q, index) in quizStore.questions" :key="q">
      <v-card-text>
        <v-radio-group v-model="quizStore.answers[index]" mandatory>
          <v-radio :label="choice" :value="choice" v-for="(choice, i) in q.incorrect_answers" :key="choice"
            :name="`radio-${i}`"></v-radio>
        </v-radio-group>
      </v-card-text>

    </v-card>
    <v-btn class="mt-5 float-right" color="success" @click.prevent="quizStore.submitAnswers()">Submit Answers</v-btn>
  </div>


</template>
