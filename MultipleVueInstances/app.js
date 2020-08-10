var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: "Vue app one"

    },
    methods: {

    },
    computed: {
        greet: function() {
            return "Hello from app one :)"
        }
    }

})

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: "Vue app two"

    },
    methods: {
        changeTitle: function() {
            one.title = "title changed";
        }

    },
    computed: {
        greet: function() {
            return "yo dudes, this is app two speaking to ya :)"
        }
    }

});

two.title = "changed from outside";