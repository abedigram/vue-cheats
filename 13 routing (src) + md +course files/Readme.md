### Router

-   install command
    -   npm install --save vue-router@next
-   config on **main.js** file

    -   history
    -   import comp.s
    -   use() route

-   config on App.vue
    -   component--> router-view
-   config on TheNavigation.vue
    -   button--> router-link === a
    -   class change on click // active vs exact-active
        -   js override active classes
-   config on UsersList.vue
    -   programmatic nav
    -   back - forward nav
-   config on TeamMembers.vue & main.js & app.vue

    -   dynamic route (id)
    -   oreder matters in main.js (new team)
        -   created(): comp. created before shown. data is present. time to apply routing
    -   log(this.\$route)

-   config on TeamsItem.vue & TeamsList.vue
    -   routerlink to id
    -   prop register id
-   teamMembers:
    -   teamId in comp == teamId in main.js
    -   watch route
        -   vue does not rebuild apge on route change so created() does not get called so data does not change.
            -   so use watch router to apply changes
- teamMembers and main.js
    - pass param as prop
        - makes component more resuable
- main.js
    - set '/' path
    - redirect '/' to another defined route
        - or use alias for defined route (alias does not change route - behaving like set '/' path)
- notFound.vue & main.js
    - set notFound 404 route. comes last in main.js config
- main.js:
    - nested route
        - another router-view is added to TeamsList.vue to load single teams ( and all other nested routes)
        - using nested routes will utilise active-route class and exact-active-route for last comp. in route address
    - route names - teamsItem and mainjs
        - add names to routes for easier router-link addressing
            - using object addressing with route names and route params
            - so when routes change just main.js changes and comp.s remain untouched
                - the object routing could be used in router push() fuction
- teamsItem & teamMembers:
    - to add query params to route, obj routing has another 'query' part (teamsItem)
    - query params could be read using $router obj (teamMembers)
- teamsFooter.vue & usersFooter.vue & main.js & app.vue
    - to have multiple router views add names router-views and define them in main.js
        - this is somehow layouting
- main.js
    - control scroll using its function
        - savedPosition is used when clicking back button. it could be returned
- nav guards in main.js
    - sideTip: use _, _2, ... to get function args but not to use them
    - the next() function in router **beforeEach** gets obj or str like router-link navigation. false param does not allow to go to wanted route
    - **beforeEnter** is used inside router object when specific route should get autorized or checked 
        - another choise is to config it inside component (usersList.vue) as beforeRouteEnter() hook
    - the run presedence is first: global beforeEach, second: route beforeEnter and third: comp. beforeRouteEnter
    - another hook is beforeRouteUpdate inside 'from' component to avoid comp. recreate if routing is not allowed
        - it could be an alternative to watch routes and update data
            - but it is less utilise cause it works only with route change not prop
    - there is another global function afterEach that fires after route change
        - it used for sending analyctic data to somewhere.
        - it fires after every beforechange func or hook
- usersList.vue:
    - beforeRouteLeave is used when some action is not completed (form ex.) and page is leaved
- main.js: meta fields in route are utilised when auth needed and are parameters of to/from objects and could avoid routing if user's not authed
- org files:
    - the **pages** folder is used for organising files that combine some comp.s
        - it is just a folder and does not auto route like nuxt
    - place all routing logic in route.js file and import in into main.js to have a cleaner main.js file