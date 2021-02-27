const app = Vue.createApp({
  data() {
    return {
      message: 'Vue is great!',
    };
  },
  methods: {

    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  // open sources tab in chrome developer tools
  // and opne app.js file
  // add breakpoint in lines 17, 20, 23, 26, 29, 32, 35, 38
  // press the blue resume button on devTool to continue running until the next breakpoint
  // to see the unmounting process press 'unmount app' button
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

function unmounter(){
  app.unmount();
}