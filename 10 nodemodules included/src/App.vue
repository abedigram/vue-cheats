<template>
	<the-header title="remeber me"></the-header>
	<stored-resources :resources="resources"></stored-resources>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import StoredResources from "./components/learning-resource/StoredResources.vue";

export default {
	components: {
		StoredResources,
		TheHeader,
	},
	data() {
		return {
			resources: [
				{
					id: "official-guide",
					title: "Official Guide",
					description: "The official Vue.js Documentation",
					link: "https://vuejs.org",
				},
				{
					id: "google",
					title: "Google",
					description: "learn search google...",
					link: "https://google.com",
				},
			],
		};
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
	box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	margin: 0;
}
</style>