<template>
	<section>
		<base-card>
			<h2>Submitted Experiences</h2>
			<div>
				<base-button>Load Submitted Experiences</base-button>
			</div>
			<!-- waiting for data to fetch -->
			<p v-if="isLoading">Loading...</p>
			<!-- error during fetch -->
			<p v-else-if="!isLoading && error">{{ error }}</p>
			<!-- empty data fetched -->
			<p v-else-if="!isLoading && (!results || results.length === 0)">
				No stored experiences found. Start adding some survey results
				first.
			</p>
			<!-- all success-->
			<ul v-else>
				<survey-result
					v-for="result in results"
					:key="result.id"
					:name="result.name"
					:rating="result.rating"
				></survey-result>
			</ul>
		</base-card>
	</section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
	// *** local data part ***
	// props: ["results"],
	components: {
		SurveyResult,
	},
	data() {
		return {
			results: [], //fetched result
			isLoading: false, //loading indicator
			error: null, //error from back
		};
	},
	// *** online data part ***
	methods: {
		loadExperiences() {
			this.isLoading = true; // set true and in the last then part set false
			this.error = null;
		// fetch("https://vue-http-demo-85e9e.firebaseio.com/surveys") //to simulate app error
			fetch("https://fir-demo-86851.firebaseio.com/surveys.json")
			// .then(function(response){// without using arrow function, 'this' keyword wont work inside block
				.then((response) => { //when response is recived
					if (response.ok) { //code == 200 and else throw Error...
						return response.json(); //pass json objected data to the next 'then' block
					}
				})
			// .then(function(data){// without using arrow function, 'this' keyword wont work inside block
				.then((data) => {
					this.isLoading = false; //stop loading indicator
					// place data into results data field
					const results = [];
					for (const id in data) {
						results.push({
							id: id,
							name: data[id].name,
							rating: data[id].rating,
						});
					}
					this.results = results;
				})
			// .catch(function(error) {// without using arrow function, 'this' keyword wont work inside block
				.catch((error) => { //any error would come here
					console.log(error);
					this.isLoading = false;
					this.error =
						"Failed to fetch data - please try again later.";
				});
		},
	},
	mounted() {// auto load data after component creation
		this.loadExperiences();
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>