'use script'


const serieA = [
    {
        nome : 'napoli',
        punti : 0 ,
        falliSubiti: 0,
    },
    {
        nome : 'roma',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'lazio',
        punti : 0,
        fallisubiti: 0,
    },
    {
        nome : 'juventus',
        punti : 0,
        fallisubiti: 0,
    },
    {
        nome : 'chievo',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'atalanta',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'empoli',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'torino',
        punti : 0,
        falliSubiti: 0,
    },
    
];

console.log(serieA);

for(let i =0;i < serieA.length; i++){
    serieA[i].punti = Math.floor(Math.random() * 100);
    serieA[i].falliSubiti = Math.floor(Math.random() * 100);
};

const nomeFalli = serieA.map(({nome,falliSubiti}) =>{
    return {nome , falliSubiti};
});

console.log(nomeFalli)







