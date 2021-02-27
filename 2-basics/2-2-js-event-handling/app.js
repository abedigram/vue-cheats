const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			name: "",
			confirmedName: "",
		};
	},
	methods: {
		submitForm(event) {
			// event.preventDefault(); // is vanilla-js method (we use .prevent in html with Vue)
			setTimeout(() => {
				alert("boops!");
			}, 1000);
		},
		// fires when user hits Enter on signup form
		confirmName(event) {
			this.confirmedName = event.target.value;
		},
		// function for handling non-v-model two way binding method
		setName(event) {
			this.name = event.target.value;
		},
		resetInput() {
			this.name = '';
		},
		// for changing counter
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
	},
});

app.mount("#events");
