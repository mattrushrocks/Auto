import { customers } from '../data/customers.js'

//inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();


//new stuff here

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");
}

const x = document.getElementById("hamburgerButton")

x.onclick = toggleMenu;


console.log(customers)

const quotesBlock = document.querySelector("#customerQuotes")
customers.forEach(customer => {
    let div = addReview(customer)
    quotesBlock.appendChild(div)
});

function addReview(customer) {
    let div = document.createElement('div')
    let name = document.createElement('p')
    name.innerText = customer.name + ":"
    let quote = document.createElement('p')
    quote.innerText = customer.comment
    let rating = document.createElement('p')
    rating.innerText = "Rating: " + customer.rating
    div.appendChild(rating)
    div.appendChild(name)
    div.appendChild(quote)
    return div
}