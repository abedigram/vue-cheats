// const app = Vue.createApp({
//   data() {
//     return {
//       currentUserInput: '',
//       message: 'Vue is great!',
//     };
//   },
//   methods: {
//     saveInput(event) {
//       this.currentUserInput = event.target.value;
//     },
//     setText() {
//       this.message = this.currentUserInput;
//     },
//   },
// });

// app.mount('#app');

//--------------------------------------------------------------------------------------------------//
// here is how reactivity (updating data changes in any place) works

// this is our vanilla-js data obj
const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

// handler is part of proxy to fire when proxy data changes
const handler = {
  // target: the data object
  // key: data obj key ex. message
  // value: newly assigned value to key ex. hello!!!!
  set(target, key, value) {
    if (key === 'message') {
      // apply changes to another fields that depend on 'message'
      target.longMessage = value + ' World!';
    }
    // apply changes to changed field (message = hello!!!!)
    target[key] = value;
  }
};

// we use proxy to keep track of changes
const proxy = new Proxy(data, handler);

console.log('proxy-before-change:',proxy.longMessage); // hello! world!

// make a change in message so longMessage changes (which regular js assign does not handle)
proxy.message = 'Hello!!!!';

console.log('proxy-after-change:',proxy.longMessage); // hello!!!! world!

//--------------------------------------------------------------------------------------------------//
// the following scenario show how js is not reactive to changes (as Vue is)

let message = 'Hello!';
let longMessage = message + ' World!';
console.log('regular-before-change:',longMessage);
message = 'Hello!!!!'
console.log('regular-after-change:',longMessage);
