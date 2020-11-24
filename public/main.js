new Vue ({
    el: '#app',
    data: {
        name: '',
        url: ''
    },
    methods: {
        createURL() {
            console.log(this.name, this.url);
        }
    }
});
