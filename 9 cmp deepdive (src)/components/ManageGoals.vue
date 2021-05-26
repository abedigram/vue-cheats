<template>
	<h2>manage goals</h2>
	<input type="text" ref="goal" />
	<button @click="setGoal">set goal</button>
	<teleport to="body">
		<error-alert v-if="inputIsInvalid">
			<h2>input is empty</h2>
			<p>plz enter some chars</p>
			<button @click="confirmError">ok</button>
		</error-alert>
	</teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
	components: {
		ErrorAlert,
	},
	data() {
		return {
			inputIsInvalid: false,
		};
	},
	methods: {
		setGoal() {
			const eneteredValue = this.$refs.goal.value;
			if (eneteredValue === "") {
				this.inputIsInvalid = true;
				// window.alert("input must not be empty!");
				// console.error("input must not be empty!");
			}
			// console.log(eneteredValue);
		},
		confirmError() {
			this.inputIsInvalid = false;
		},
	},
};
</script>