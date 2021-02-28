# about cli version of vue

the very first entry point of a cli-vue-app is main.js
inside of main.js the App.vue or any template else is imported
then Vue is created and mounted to the imported parent Vue template

the public/index.html file is where the vue app is mounted
it is a place to define html head properties
which are defined in another config file and bound here
so that the index.html file is kept untouched

to add a component to work with, use app.component as before in main.js
components are imported with CapitalCase and used in kebap-case
component names should be in x-y format so that they wont have conflict with regular html tags
