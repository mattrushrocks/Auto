import { customers } from '../data/customers.js'

// inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();

// toggle menu
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
    div.classList.add('customerReview')

    // Stars
    const starsDiv = document.createElement('div')
    starsDiv.classList.add('reviewStars')
    const maxStars = 5
    for (let i = 1; i <= maxStars; i++) {
        const star = document.createElement('span')
        star.textContent = '★'
        star.style.color = i <= customer.rating ? '#FFD700' : '#ccc'
        starsDiv.appendChild(star)
    }
    div.appendChild(starsDiv)

    // Name
    let name = document.createElement('p')
    name.innerText = customer.name + ":"
    div.appendChild(name)

    // Comment
    let quote = document.createElement('p')
    quote.innerText = customer.comment
    div.appendChild(quote)

    return div
}

