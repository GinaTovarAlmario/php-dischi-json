const { createApp } = Vue

createApp({
    data() {
        return {
            dischiList : [],
        }
    },
    methods:{
        getList(){
        // faccio la chiamata attraverso axios
            axios.get('http://localhost/php-dischi-json/api/')
                .then((response) => {
                    // handle success
                    console.log(response.data);
                    this.dischiList = response.data;

                })
                .catch(function (error) {
                    // handle error
                    console.error(error);
                });
            
        },
    },
    created(){
        this.getList();
    }
}).mount('#app');