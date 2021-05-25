## local component registration

- when importing all components in main.js file, every vue comp. is imported in any componnet. & this would not perform good performance
  - instead, local importing could be used. so compoenets are imported in script part of .vue file and also mentioned in **compoenet** part of module
  - adding components in module has three ways
    - first: **'kebab' : pascal** case . using this method, components should be written in kebap-case in html part with open and close tags
    - second: **pascal : pascal** case witch it could be written in both kebap-openclose format & pascal-selfclose format in html
    - third: **pascal** format whitch is short format of second method and all properties are the same.
  - check app.vue file

## Local stying

- styles could be written in every .vue file. but they affect on every component in the project
  - to avoid this problem, using **scoped** propery when opening style tag would solve that.
    - so that every style affect on that component's template. not any other parent,sibling,child
    - vue implements this using ID property for every component template

## slot

- passing data to component is done by using **props**
- but to pass html content inside a comp. we should use **slots**
  - so that we can wrap html content with general styling for various comp.s
- slots could be used multiple times inside a component to pass different html to any part. for example the header and main body
  - to do so slots need to be named using name property inside slot definition
  - to pass html to specific slot, code is wrapped insided **template** tag and slot is specified using **v-slot:name**
    - there is a shorthand to use **#slotname**
  - there is only one unnamed slot allowed and it is named **default** in template (optional)
  - styles and prop data are not passed through slots. they are computed before placing in slot
    - all the style should be placed inside base slotted component (baseCard in this project case)
  - there is an option to show defalut content when slot is not used by wrapped content. the default html is written in the base comp.
    - also when a slot is not used, vue renders it empty tags, to avoid rendering empty tag, v-if="\$slots.name" could be used.
  - another feature is **scoped slots** whitch is a neach feature and is complicated :) read it on ur own :))

## dynamic component

- when implementing tab behaving components (show one and hide another)
  - one way is to use dosens of v-if
  - anohter way is using **component tag** and use **is** prop to tell whitch comp. to show
    - one problem of this method is components are destroyed on switch
      - so if a text field is filled, it would get cleard
    - solution is **keep-alive** witch is wrapped around comp-tag to keep components in DOM

## some tips (teleport, ...)

- to pass input data without binding to data() property, use \$ref. (manageGoals comp.)
- to show alert use a slot based component witch has a **dialog** tag inside. (manageGoals comp.)
  - this idea has a problem when opening dialog inside a nested tiny comp. style issues must occur
    - to solve that, **teleport** tag is used with a **to** prop witch its value is a css selector (where u want it to go) & 'body' is a good place for a dialog
- vue has a guide to write CleanCode and structure here: https://vuejs.org/v2/style-guide/
- feel free to folderize the components folder into meaningful categories like:
    - UI, features, utils, layout, checkout/cart, ...
