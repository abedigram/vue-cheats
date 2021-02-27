const app = Vue.createApp({
  data() {
    return {
      // currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },

    // ref is a vue-known html attribute that works for some cases
    // like user input validation
    // instead of @input event or v-model
    // every ref holds the html assigned elment and all its attributes like 'value'
    // so there is no need to saveInput() for reciving input events & 'currentUserInput' to buffer input value
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
});

app.mount('#app');