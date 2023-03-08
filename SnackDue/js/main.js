'use strict'

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
console.log(studentiFacolta);

const nomi = studentiFacolta.map((studentiNome) =>{
    return studentiNome.nome.toUpperCase();
});
console.log(nomi);


/* const 

const nomiStudenti = studentiFacolta.filter((nome) =>{
    if(nome = nome){
        return true;
    }
    return false;

} );

console.log(nomiStudenti) */