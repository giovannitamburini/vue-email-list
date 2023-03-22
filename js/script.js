const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],
        }
    },

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
}).mount('#app')
