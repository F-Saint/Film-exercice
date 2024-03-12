const country = document.getElementById('.country-name');
const flag = document.getElementById('flag');
const input = document.getElementById('input');
const score = document.getElementById('score');
const verdict = document.getElementById('verdict');
const submit = document.getElementById('submit');
const next = document.getElementById('next');

const key = 'Sa8WcaHG2Ecdv7C21nYPxLjxgNhAiOtY9tqmXur0'

const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`

window.addEventListener('DOMContentLoaded', displayQuiz)

fonction displayQuiz() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        const countryArray = Object.keys(data)

        console.log(countryArray)
    
    })

    .catch(err => console.log(err))