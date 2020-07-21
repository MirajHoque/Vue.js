new Vue({
    //vue instance
    //it's role is to control either whole part or certain part of our application
    el: '#vue-app',
    //element:which elements is control this vue instances
    data: {
        //where we store all of our data for vue instance
        name: 'Miraj',
        job: 'software Engineer',
        website: 'https://vuejs.org/',
        documentation: '<a href="https://vuejs.org/v2/guide/">Go to guide</a>'
    },
    methods: {
        greet: function(time) {
            //this.data.name
            //this.name;
            //this keyword refers to vue instance
            return 'Good' + ' ' + time + ' ' + this.name;

        }

    }
})