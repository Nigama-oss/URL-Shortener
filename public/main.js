new Vue ({
    el: '#app',
    data: {
        error: '',
        success: false,
        name: '',
        url: ''
    },
    methods: {
        createURL() {
            const body = {
                name: this.name,
                url: this.url
            };
            fetch('/api/shortener', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(result => {
                if (result.isJoi) {
                    this.error = result.details.map(detail => detail.message).join('. ');
                    console.log(this.error);
                } else {
                    this.success = true;
                }
            });
        }
    }
});
