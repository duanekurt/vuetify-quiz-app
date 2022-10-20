import { defineStore } from 'pinia'
import axios from 'axios' 
import router from '../router'

const state = () => ({
    loading: false,
    questions: [],
    answers: [],
    score: 0
});

const getters = {};

const actions = {
    async fetchQuestions() {
        this.loading = true

        const questions = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');

        this.loading = false;

        if (questions.status !== 200) {
            return false;
        }

        questions.data.results.map(res => {
            res.incorrect_answers.push(res.correct_answer);
        });
        
        this.questions = questions.data.results

        return true;
    },

    async submitAnswers() {
        this.loading = true

        var correct_counter = 0;
        
        this.questions.map(q => {
            if (this.answers.includes(q.correct_answer)) {
                correct_counter++;
            }
        });
        
        this.score = correct_counter;
        
        router.push('/results')

        return correct_counter;
    },

    async retake() {
        this.answers = []
        router.push('/')
    }
};


export const useQuizStore = defineStore('quizStore', {
    state,
    getters,
    actions
})