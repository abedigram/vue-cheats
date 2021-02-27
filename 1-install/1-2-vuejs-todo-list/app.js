Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: "",
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = "";
		},
		resetGoals() {
			this.goals = [];
		},
	},
}).mount("#app");
