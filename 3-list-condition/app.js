const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: []
     };
  },
  methods: {
    addGoal() {
	// add new element at the end
      this.goals.push(this.enteredGoalValue);
    },
	//removes element at the index
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');