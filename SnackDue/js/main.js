'use strict'

/* array con obj */

const studentiFacolta = [
    {
        id : 213,
        nome : 'Marco della Rovere',
        sommaTotale : 78,
    },
    {
        id : 110,
        nome : 'Paola Cortellessa',
        sommaTotale : '96',
    },
    {
        id : 250,
        nome : 'Andrea Mantegna',
        sommaTotale : 48,
    },
    {
        id :145,
        nome :'Gaia Borromini',
        sommaTotale : 74,
    },
    {
        id : 196,
        nome : 'Luigi Grimaldello',
        sommaTotale : 68,
    },
    {
        id : 102,
        nome : 'Piero Della Francesca',
        sommaTotale : 50,
    },
    {
        id : 120,
        nome : 'Tony Tammaro',
        sommaTotale : 84,
    },
]

/* array con obj */

/* Studente solo nomi */

console.log(studentiFacolta);

const nomi = studentiFacolta.map((studentiNome) =>{
    return studentiNome.nome.toUpperCase();
});
console.log(nomi);

/* Studente solo nomi */

/* stutente sommatotale >70 */

const sumTotSuperiore = studentiFacolta.filter((StudenteVoti)=>{
   
    return StudenteVoti.sommaTotale>70;
})

console.log(sumTotSuperiore);

/* stutente sommatotale >70 */

/* studente >70 >= 120 */

const studentealpha = studentiFacolta.filter((studente)=>{
   
    return studente.sommaTotale>70 && studente.id>=120;
})

console.log(studentealpha);

/* studente >70 >= 120 */