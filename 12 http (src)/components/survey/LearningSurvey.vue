<template>
	<section>
		<base-card>
			<h2>How was you learning experience?</h2>
			<form @submit.prevent="submitSurvey">
				<div class="form-control">
					<label for="name">Your Name</label>
					<input
						type="text"
						id="name"
						name="name"
						v-model.trim="enteredName"
					/>
				</div>
				<h3>My learning experience was ...</h3>
				<div class="form-control">
					<input
						type="radio"
						id="rating-poor"
						value="poor"
						name="rating"
						v-model="chosenRating"
					/>
					<label for="rating-poor">Poor</label>
				</div>
				<div class="form-control">
					<input
						type="radio"
						id="rating-average"
						value="average"
						name="rating"
						v-model="chosenRating"
					/>
					<label for="rating-average">Average</label>
				</div>
				<div class="form-control">
					<input
						type="radio"
						id="rating-great"
						value="great"
						name="rating"
						v-model="chosenRating"
					/>
					<label for="rating-great">Great</label>
				</div>
				<p v-if="invalidInput">
					One or more input fields are invalid. Please check your
					provided data.
				</p>
				<!-- errors from back are shown here -->
				<p v-if="error">{{ error }}</p>
				<div>
					<base-button>Submit</base-button>
				</div>
			</form>
		</base-card>
	</section>
</template>

<script>
export default {
	data() {
		return {
			enteredName: "",
			chosenRating: null,
			invalidInput: false,
			// errors from back store there
			error: null,
		};
	},
	// *** parts to store local data ***
	// emits: ['survey-submit'],
	methods: {
		submitSurvey() {
			if (this.enteredName === "" || !this.chosenRating) {
				this.invalidInput = true;
				return;
			}
			this.invalidInput = false;
			// *** parts to store local data ***
			// this.$emit('survey-submit', {
			//   userName: this.enteredName,
			//   rating: this.chosenRating,
			// });

			// *** online methods ***
			this.error = null;
			// fetch or 3rd party axios module are used
			fetch("https://fir-demo-86851.firebaseio.com/surveys.json", {
		// fetch('https://fir-demo-86851.firebaseio.com/surveys', {// to simulate sever errors
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// body: { //to simulate bad requests
				// 	name: this.enteredName,
				// 	rating: this.chosenRating,
				// },

				// mind to stringify data before send
				body: JSON.stringify({
					name: this.enteredName,
					rating: this.chosenRating,
				}),
			})
			// .then(function(response){// without using arrow function, 'this' keyword wont work inside block
				.then((response) => {
					//subscribe for response
					if (response.ok) {
						// code == 200
						// ...
					} else {
						throw new Error("Could not save data!"); // sends error to catch part
					}
				})
				// .catch(function(error){// without using arrow function, 'this' keyword wont work inside block
				.catch((error) => {
					//any server or app error come here
					console.log(error);
					this.error = error.message;
				});
			// *** online methods ***
			this.enteredName = "";
			this.chosenRating = null;
		},
	},
};
</script>

<style scoped>
.form-control {
	margin: 0.5rem 0;
}

input[type="text"] {
	display: block;
	width: 20rem;
	margin-top: 0.5rem;
}
</style>