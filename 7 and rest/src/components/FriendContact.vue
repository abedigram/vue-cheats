<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>
		<button @click="toggleDetails()">
			{{ detailsAreVisible ? "Hide" : "Show" }} Details
		</button>
		<button @click="toggleFavorite()">toggle fav</button>
		<ul v-if="detailsAreVisible">
			<li>
				<strong>Phone:</strong>
				{{ phoneNumber }}
			</li>
			<li>
				<strong>Email:</strong>
				{{ emailAddress }}
			</li>
		</ul>
	</li>
</template>

<script>
export default {
	// props: ["name", "phone", "email", "isFavorite"],
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			required: false,
			default: false,
			validator: function (value) {
				return value === true || value === false;
			},
		},
	},
	emits: ['toggle-favorite'],
	// emits: {
	// 	'toggle-favorite': function(id){
	// 		if(id){
	// 			return true;
	// 		}else{
	// 			console.warn("id is missing!");
	// 			return false;
	// 		}
	// 	}
	// },
	data() {
		return {
			detailsAreVisible: false,
			// friendIsFavorite: this.isFavorite,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			// this.friendIsFavorite = !this.friendIsFavorite;
			this.$emit('toggle-favorite', this.id);
		},
	},
};
</script>