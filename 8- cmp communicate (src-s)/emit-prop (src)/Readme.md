# about props
- props are inputs to a component
- write them in kebap-case format in HTML
    - and recieve props in components in single quoted camelCase format
- props are merged with data field
    - notice that props names should not conflict with data fields
- props data should not get changed inside component (voilation of uni-directional data-flow of props)
    - to change a prop data, its value shoud get copied inside data()
- props could also be an obj inside the component therefore some properties like type, required, defalut and validator could get defined
    - missing a required property or violating the validator cause a warning in console
- to pass non-string values via props use v-bind   // :is-fav="true"

# about events
- to send data out of a component to its parent use $emit
    - event should be named in kebap-case
    - parent listens for @event and react to it via a function
    - event parameters manually pass after event name in $emit()
- it is a best practice to define each of component outputs (emit events) in a field called "emits" as an array of object to preform some validations
```js
```