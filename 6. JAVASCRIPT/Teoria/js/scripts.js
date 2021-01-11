// document.body.style.backgroundColor ='yellow';
// document.body.style.padding ='1rem';
// document.body.style.margin ='4rem';


// // FORMA 1: CAMBIAR DE CLASE

// document.body.classList.add('blue');


// // forma 2:  DECLARANDO LOS ESTILOS
// const color = 'blue'
// const size = 2
// const styles = `
//  background : ${color};
//  display: inline-block;
//  color : white;
//  margin-top: 4em;
//  border-bottom : ${size *2}px solid black;
// `

// // 1 -FORMAS DE REEMPLAZAR LOS VALORES EN JAVASRIPT- SOBREESCRIBIENDO

// // document.getElementById('title').setAttribute('style', styles)

// // 2 - agregando a los estilos existentes(si hubiera estilos inline existentes)
// document.getElementById('title').style += `;${styles}`


// MODIFICARLAS

document.documentElement.style.setProperty('--name', 'Juan')

// LEER

console.log(getComputedStyle(document.documentElement).getPropertyValue('--name'))


//------------------------------------------------
// MEDIA QUERYS  ------->   matchMedia('')
//------------------------------------------------

// addEventListener('DOMContentLoaded', () => {
//     const mediumBp = matchMedia('(min-width: 800px')
//     console.log(mediumBp.matches)

//     if(mediumBp.matches) {
//         document.body.style.background ='red'
//     }
//     else{
//         document.body.style.background ='yellow'
//     }
// })

// addEventListener('resize', () => {
//     const mediumBp = matchMedia('(min-width: 800px')
//     console.log(mediumBp.matches)

//     if(mediumBp.matches) {
//         document.body.style.background ='red'
//     }
//     else{
//         document.body.style.background ='yellow'
//     }
// })

// ------------------------------------------------------------------------
const mediumBp = matchMedia('(min-width: 800px')

const changeColor = mql => {
    mql.matches
    ? document.body.style.background ='red'
    : document.bosy.style.background = 'yellow'
}

changeColor(mediumBp)
mediumBp.addListener(changeColor)