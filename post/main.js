new Vue({
    el: '#root',
    data: {
        title: [],
        message: [],
    },
    methods: {
        sendPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.title,
                body: this.message,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
});