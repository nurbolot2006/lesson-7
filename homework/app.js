


const coffee_api = 'https://api.sampleapis.com/coffee/'

const coffee = document.querySelector('.coffee')
const buttons = document.querySelectorAll('#btns button')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        coffee.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
        fetchCoffee(btn.innerText)
    })
})

function fetchCoffee(genre = 'hot'){
    fetch(coffee_api + genre)
    .then( (response) => {
        console.log(response, '----response----');
        return response.json()
    })
    .then( (coffeeDate) => {
        console.log(coffeeDate,'----response----');
        renderCard(coffeeDate)
    })
}
fetchCoffee()

function renderCard(arr = []){
    coffee.innerHTML = arr.map( (coffee) => {
        return`
        <div class="card" style="width: 18rem;">
            <img src="${coffee.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${coffee.little} </h5>
                <p class="card-title">${coffee.title}</p>
                <li class="card-title">${coffee.ingredients}</li>
            </div>
        </div>`
    }).join('')
}

