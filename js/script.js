const { createApp } = Vue

createApp({
    data() {
        return {
            email: '',
        }
    },

    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
            console.log(res.data.response);

            this.email = res.data.response;
        })
    },



}).mount('#app')
