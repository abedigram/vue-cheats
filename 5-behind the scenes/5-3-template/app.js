// another way to have multiple apps running (which is starting point to see components)
// is to use 'template' field to replace html code in #app2 element
// all the stuff in the 'template' is replaced with the #app2 static content
const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    };
  }
});

app2.mount('#app2');
