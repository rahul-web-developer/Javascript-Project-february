


const left = document.querySelector('#leftbtn')
const right = document.querySelector('#rightbtn')


let slider = document.querySelector('.slider')

let slideno = 1;




let images = document.querySelectorAll('.image');


let imagelength = images.length;


console.log(left)
console.log(images)


const nextslide = ()=>{

    
    slider.style.transform = `translateX(-${slideno *800}px)`;
    slideno++;

}
const getfirstslide = ()=>{

    
    slider.style.transform = `translateX(0px)`;
    slideno =1;


}

const getlastslide = ()=>{

    
    slider.style.transform = `translateX(-${(imagelength -1)*800}px)`;
    slideno = imagelength;


}


const prev = ()=>{

    
    slider.style.transform = `translateX(-${(slideno-2)*800}px)`;
    slideno --;


}


right.addEventListener('click',()=>{


   
    slideno < imagelength ? nextslide() : getfirstslide() 
   




})







left.addEventListener('click',()=>{

    slideno  > 1 ? prev() : getlastslide()



})