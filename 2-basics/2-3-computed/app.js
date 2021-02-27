const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    // has same code as outputFullname()
    // but triggers when ever the dependent vars change
    // open console and hit add/reduce button to see the change
    fullname() {
      console.log('Running computed');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmüller';
    },
  },
  methods: {
    // triggers when ever the html template changes
    // open console and hit add/reduce button to see the change
    outputFullname() {
      console.log('Running method');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmüller';
    },



    // old code
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
