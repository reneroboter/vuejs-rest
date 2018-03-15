new Vue({
    el: '#root',
    data: {
        posts: [],
        postId: [],
    },
    methods: {
        getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => this.posts = response.data)
                .catch(function (error) {
                    console.log(error);
                });
        },
        searchPost() {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.postId)
                .then(response => this.posts = [response.data])
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});