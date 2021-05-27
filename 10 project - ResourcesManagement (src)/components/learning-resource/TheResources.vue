<template>
	<base-card>
		<base-button
			@click="setActiveTab('stored-resources')"
			:mode="storedResButtonMode"
			>Stored Resources</base-button
		>
		<base-button
			@click="setActiveTab('add-resource')"
			:mode="addResButtonMode"
			>Add Resource</base-button
		>
	</base-card>
	<keep-alive>
		<component :is="activeTab"></component>
	</keep-alive>
</template>

<script>
import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";

export default {
	components: {
		AddResource,
		StoredResources,
	},
	data() {
		return {
			activeTab: "stored-resources",
			StoredResources: [
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
	provide() {
		return {
			resources: this.StoredResources,
			addResource: this.addResource,
			deleteResource: this.removeResource,
		};
	},
	computed: {
		storedResButtonMode() {
			return this.activeTab === "stored-resources" ? null : "flat";
		},
		addResButtonMode() {
			return this.activeTab === "add-resource" ? null : "flat";
		},
	},
	methods: {
		setActiveTab(tab) {
			this.activeTab = tab;
		},
		addResource(title, description, link) {
			const newResource = {
				id: new Date().toISOString(),
				title: title,
				description: description,
				link: link,
			};
			this.resources.unshift(newResource);
			this.activeTab = "stored-resources";
		},
		removeResource(resId) {
			// this wont work / does not notify the provide section to update date because assigns new array to StoredResources
			// this.StoredResources = this.StoredResources.filter(
			// 	(res) => res.id !== resId
			// );

			// this works well bcze updates array in place
			const resIndex = this.StoredResources.findIndex(res => res.id == resId)
			this.StoredResources.splice(resIndex, 1);

		},
	},
};
</script>