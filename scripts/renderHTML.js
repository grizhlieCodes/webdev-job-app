let body = document.body

import createToggle from './toggle.js'
import addHeader from './header.js'
import createHeader from './header.js'

function appendComponent(el) {
    let appendedEl = el()
    let div = document.createElement('div')
    div.innerHTML = appendedEl
    body.append(div)
}
appendComponent(addHeader)

const header = document.querySelector('header')
const headerInner = header.querySelector('.header-inner-container')
const toggle = createToggle()
headerInner.innerHTML += toggle

let jobPostings
async function fetchData(){
    var jsonData = await fetch('../assets/jason/data.json')
    var data = await jsonData.json()
    jobPostings = data
    console.log(jobPostings)
}
fetchData()


