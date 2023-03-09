
'use strict'

const negozioBici = [

    {
        nome: 'Pininfarina',
        peso: 10,
    },
    {
        nome: 'Ducatino',
        peso: 15,
    },
    {
        nome: 'NuPacc',
        peso: 30,
    },
    {
        nome: 'bmx',
        peso: 6,
    },
    {
        nome: 'Chinatoy',
        peso: 7,
    },
];

console.log(negozioBici);


const piuLeggera = Math.min(...(negozioBici.map((value) => value.peso)));


console.log(`${piuLeggera}` +' kg ' + ' è la bici più leggera');




const containerHtml = document.getElementById('contenitore_js');

const element = document.createElement('p');

element.innerHTML = (`${piuLeggera}`+' kg ' + ' è la bici più leggera')

containerHtml.append(element);


