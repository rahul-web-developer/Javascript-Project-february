


const colorcode = document.querySelector('#colorcode');

const buttonid = document.querySelector('#buttonid');




console.log(colorcode)

console.log(buttonid)

const main = document.querySelector('.main')

function getcolor(){


    const rendomNumber =Math.floor(Math.random() *1677215) ;


    const randomcode = "#"+ rendomNumber.toString(16);

    console.log(rendomNumber)
    console.log(randomcode)

  colorcode.style.color = randomcode

  colorcode.innerHTML = randomcode


  buttonid.style.color = randomcode

  main.style.backgroundColor = randomcode

}

getcolor()

buttonid.addEventListener('click',getcolor)