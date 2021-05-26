- in this project, the App.vue comp sends data as prop to k-base. then k-grid and k-base just pass it downward to k-element file to process the data
  **this is a problem**
- alse, the Knowledge-element comp emits an event. then k-grid and k-base just pass it upward to App.vue file to process the event
  **this is also a problem**

---

**provide and inject is the solution**

- so instead of passing data through components, the parent comp **provides** some data and any of childs or nested childs could **inject** and use the data
- but still events are passed through components to the top
    - this is handled blow :)
- provide could be written in an array to provide static content or in a data() object shape to pass dynamic ones
    - the bound data is synced whenever source (data) changes

```js
  //static
  provide: {
    topics: [...],
  },
  //dynamic
  provide(){
    return{
      topics: this.topics
    }
  },
```

**provide-inject for events**

- to solve this, one child injects some function and calles it inside itself
    - then ancestor component provides the same function name and bounds it to one of itself methods

---
remember to use provide and inject wisely because:

- prop and emit is the main solution and in some occasional states provide-injects is needed to remove passing through effect.
- provide-inject makes code unreadable (needs to search which provided field injected where)
