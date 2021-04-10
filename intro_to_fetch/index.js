// console.log('Hello World');
let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

// fetch(url)  // fetch is a method available to us in the browser 
//             // And we supply atleast a url and it will kick off 
//             // a "GET" request to that url
//     .then(res => res.json())    // .then() can be chained on a fetch to allow us
//                                 // to take the response and do something with it

//     .then(json => { //In this case I have used the json data to display in the console
//         console.log(json)
//         console.log(json.title) // These logs are unique to the json that we got back
//         console.log(json.locations) // and only work on this objects structure
//         console.log(json.director)
//     })

let baseURL = "https://ghibliapi.herokuapp.com"

    fetch(baseURL + '/films')  
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let myArr = json.map(film => {
            return 
        })



















        console.log('hey-check')

        let myarr = json.map(film => {

            return {
                title: film.title,
                rt_score: film.rt_score
            }
        })

        console.log(myarr)

        for(let film of json){
            myarr.push(
                {
                    title: film.title,
                    rt_score: +film.rt_score //turns a string into a number
                }
            )
        }

        console.log(myarr)
        displayResults(myarr)

    })    
    // let lOfMovie = []
    // function getMyInfo(json){
    //     for(i=0; i<= json.length; i++){
    //         console.log(json[i].title)
    //         console.log(json[i].rt_score)
    //         lOfMovie.push("title : " + json[i].title + " - Rotten Tomato Rating : " + json[i].rt_score)
    //     }
    // }
                                
    // .then(json => {
    //     getMyInfo(json)
    //     // let rresult = json

    //     // let lOfMovie = []
    //     // for(let i=0; i<rresult.length; i++){
    //     //     console.log("title : " + json[i].title + " - Rotten Tomato Rating : " + json[i].rt_score)
    //     //     lOfMovie.push("title : " + json[i].title + " - Rotten Tomato Rating : " + json[i].rt_score)
    //     // }

    //     // console.log(lOfMovie)

    //     // console.log(rresult)
    //     // console.log(json)
    //     // console.log(json[0])
    //     // console.log(json[0].title)
    //     // console.log(json[0].rt_score)
    //     // Try to use the json [] to 
    //     // Title
    //     // rt_score

    // })    
 

/* 
BASIC fetch usage

fetch(<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)



*/


let getLocations = (locUrl) => {
    fetch(locUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json[0])
        })
}









let filmList
let filmLi
function displayResults(films) {
    console.log("hello from display resultss", films) //checks to prove I am passing
    letfilmList = document.getElementById("film-list")  // this is the first time we grab a dom element by id


    films.map(film => {
        // For each film I make a new li tag
        let filmLi = document.createElement('li') 
        // this is our first time making a new tag from js

        // Assignment of the film title and rt score to the inner text
        filmLi.innerText = `${films[0].title } ${films[0].rt_score}`
        // Adds the newly made li tag with text to the ul tage
        filmList.appendChild(filmLi)
    })
}
// Fetch is available in the browser
// Axios is available in the browser
// Runtime - 
// Node
// Methods within the browser - > 
// Browser has SPECIFIC methods within the browser - 
// http://wwwperiodictable.surge.sh/?hn5

// fetch is asynchronous
// js keeps running
// 