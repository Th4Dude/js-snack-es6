'use strict'

const tavoloVip = [];

const listaInvitatiTipografia = [];

const listaInvitati = ['Brad Pitt','Jhonny Depp','Lady Gaga','Cristiano Ronaldo','Georgina Rodriguez','Chiara Ferragni','Fedez','George Clooney','Amal Clooney','Maneskin'];
console.log(listaInvitati);

listaInvitati.forEach((invitati, index) => {
    const attributi = {
        nomeTavolo : tavoloVip,
        nomeOspite : invitati,
        posto : index,
    }

    listaInvitatiTipografia.push(attributi);
})

console.log(listaInvitatiTipografia);

