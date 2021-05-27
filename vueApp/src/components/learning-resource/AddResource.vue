<template>
	<base-dialog
		v-if="inputIsInvalid"
		@close="confirmError"
		title="Invalid Input"
	>
		<template #default>
			<p>input is invalid</p>
			<p>please check all inputs if they are empty</p>
		</template>
		<template #actions>
			<base-button @click="confirmError">OKay</base-button>
		</template>
	</base-dialog>
	<base-card>
		<form @submit.prevent="submitData">
			<div class="form-control">
				<label for="title">Title</label>
				<input type="text" name="title" id="title" ref="titleRef" />
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea
					name="description"
					id="description"
					rows="3"
					ref="descRef"
				></textarea>
			</div>
			<div class="form-control">
				<label for="link">Title</label>
				<input type="url" name="link" id="link" ref="linkRef" />
			</div>
			<div class="form-control">
				<base-button type="submit">Add Resource</base-button>
			</div>
		</form>
	</base-card>
</template>

<script>
export default {
	data() {
		return {
			inputIsInvalid: false,
		};
	},
	inject: ["addResource"],
	methods: {
		submitData() {
			const title = this.$refs.titleRef.value;
			const desc = this.$refs.descRef.value;
			const link = this.$refs.linkRef.value;

			if (
				title.trim() === "" ||
				desc.trim() === "" ||
				link.trim() === ""
			) {
				this.inputIsInvalid = true;
				return;
			}
			this.addResource(title, desc, link);
		},
		confirmError(){
			this.inputIsInvalid = false;
		}
	},
};
</script>

<style scoped>
label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	padding: 0.15rem;
	border: 1px solid #ccc;
}

input:focus,
textarea:focus {
	outline: none;
	border-color: #3a0061;
	background-color: #f7ebff;
}

.form-control {
	margin: 1rem 0;
}
</style>