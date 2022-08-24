# state-management-with-composition-api

# VUE'S APIS

### Options api
- data
- computed
- methods
- watch
- mounted

### Reactivity api
- ref, reactive
- computed
- watch, watchEffect
- onMounted
...
- import { ... } from 'vue'

### Composition api
- setup()

### Options api component
### The problem is: logical units are spread over the whole script block

```
<template>
    <p>{{greeting}} {{ fullName }}</p>
</tempate>

<script>
export default {
    name: 'ComponentName',
    data() {
        return {
            greeting: 'hello'
        }
    }
    props: {
        firstName: {
            type: string,
            required: true
        },
        lastName: {
            type: string,
            required: true
        }
    },

    computed: {
        fullname() {
            return `${this.firstName} ${this.lastName}`
        }
    },

    methods: {
        ....
    }
}
</script>
```

# Composition APIS
### The composition Api enables developers to encapsulate logical units. In one single file or shared with other. Seems like hooks in react