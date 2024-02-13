

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";



const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


    const moviebox = document.querySelector('#movie-box')

   

       async function getmovie(api){



        const res = await fetch(api)

        const data = await res.json()


        console.log(data)
           
 showmovie(data.results)




    }



      function showmovie(data){


        moviebox.innerHTML = "v"


        console.log(moviebox)
        console.log(data)

       data.forEach(element => {
        
        console.log('results' , element)

        const box = document.createElement('div');

        box.classList.add('box');


        box.innerHTML = `

        <img src="${IMGPATH+element.poster_path}"/>

        <div class="overlay">

        <div class="title">
        <h2> ${element.original_title}   </h2>

        <span> ${element.vote_average}  </span>


        </div>


        <h3> overview:  </h3>

        <p>

        ${element.overview}

        </p>



        </div>



        
        
        `




 moviebox.appendChild(box)
    
       });


    }


    document.querySelector('#search').addEventListener("keyup",(event)=>{


        console.log(event.target.value)


        if(event.target.value != ""){

            getmovie(SEARCHAPI + event.target.value)




        }else{

           getmovie(APIURL)

        }




    })




    getmovie(APIURL)


