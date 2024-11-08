
const api_url = 'https://api.sampleapis.com/movies/'

const movies = document.querySelector('.movies')
const buttons = document.querySelectorAll('#btns button')

buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        movies.innerHTML = `<div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>`      
        fetchMovies(btn.innerText)
        
    })
})


function fetchMovies(genre = 'animation') {
    fetch(api_url + genre)
    .then( (Response) => {
        console.log(Response, '---response---');
        
        return Response.json()
    })
    .then( (moveDate) => {
        console.log(moveDate, '---date---');
        renderCard(moveDate)
    })
}
fetchMovies();

function renderCard(arr = []) {
    movies.innerHTML = arr.map( (film) => {
        return`
        <div class="card" style="width: 18rem;">
            <img src="${film.posterURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${film.titl} </h5>
            </div>
        </div>
`
    })
}