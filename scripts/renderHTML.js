let body = document.body

import toggle from './toggle.js'

function appendComponent(el) {
    let appendedEl = el()
    let div = document.createElement('div')
    div.innerHTML = appendedEl
    body.append(div)
}
