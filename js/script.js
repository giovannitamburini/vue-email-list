const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],
        }
    },
    /*
    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
            this.emails.push(res.data.response);
        });
    },

    */

    methods: {

        generateList() {

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((res) => {
                this.emails.push(res.data.response);
                });

            }
        }
    }

}).mount('#app')
