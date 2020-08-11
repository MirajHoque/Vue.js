new Vue({
    el: '#vue-app',
    data: {
        output: 'Your fav food'

    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText);
            //this.$refs.refName,propertyName
            this.output = this.$refs.input.value;
        }
    }
})