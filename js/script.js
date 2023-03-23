// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [],
      }
    },

    created(){
        this.getEmails(10);
    },
 

    methods: {

        getEmails(quantity){

            for( let i = 0; i < quantity; i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then ((res)=>{
                    

                    const mail = res.data.response;
                    this.emails.push(mail);

                    console.log(res.data.response);


                });

            }
        }
    }

  }).mount('#app')