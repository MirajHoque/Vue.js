Vue.component('greeting', {
    //Vue.component(component name, object)
    template: '<p>Hey there, i am {{ name }}.  <button v-on:click="changeName">change name</button></p>',
    data: function() {
        return {
            name: "Miraj"
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Nobody'
        }
    }

})


new Vue({
    el: '#vue-app-one',
    data: {

    },
    methods: {

    }
})

new Vue({
    el: '#vue-app-two',
    data: {

    },
    methods: {

    }
})