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
async function fetchData() {
    var jsonData = await fetch('../assets/jason/data.json')
    var data = await jsonData.json()
    jobPostings = data
    return data
}
// fetchData()
let main
function createMain() {
    main = document.createElement('main')
    main.classList.add('flex', 'flex-grow', 'justify-between', 'items-center', 'flex-wrap', 'max-w-[111rem]', 'min-w-[327]')
    body.append(main)
}
createMain()


async function renderJobCards() {
    const data = await fetchData()

    data.forEach(job => {
        console.log(job.id)
        let cardContainer = document.createElement('div')
        cardContainer.id = job.id
        cardContainer.classList.add('h-[25.3rem]', 'w-[35rem]', 'min-w-[22.8rem]', 'max-w-[35rem]', 'relative')
        main.append(cardContainer)

        let logo = document.createElement('div')
        logo.id = 'logo'
        logo.classList.add('absolute', 'z-10', 'left-[3.2rem]', 'h-[5rem]', 'w-[5rem]', 'rounded-[1.5rem]')
        let imgLogo = document.createElement('img')
        imgLogo.src = job.logo
        logo.append(imgLogo)
        cardContainer.append(logo)

        let jobCard = document.createElement('div')
        jobCard.id = 'job-card'
        jobCard.classList.add('h-[22.8rem]', 'w-[100%]', 'absolute', 'bottom-[0rem]', 'rounded-[0.5rem]', 'pt-[1.7rem]')

        let jobInfoCard = document.createElement('div')
        // let jobInfoContainer = document.createElement('div')
        jobInfoCard.id = 'job-info-container'
        jobInfoCard.classList.add("ml-[3.2rem]", "my-[3.2rem]", "w-[28.6rem]", "h-[14.7rem]", "flex", "flex-col", "justify-between")

        let jobInfo = document.createElement('div')
        jobInfo.id = 'job-info'
        jobInfo.innerHTML =
            `<p class="text-[1.6rem] font-norma text-grey"> ${job.contract} . ${job.postedAt} </p>
        <p class="text-[2rem] font-bold my-[0.6rem]"> ${job.position} </p>
        < class="text-[1.6rem] font-norma text-grey"> ${job.company} </p>`
        jobInfoCard.append(jobInfo)

        let jobLocation = document.createElement('div')
        jobLocation.id = 'job-location'
        jobLocation.classList.add('text-[1.4rem]', 'font-bold', 'text-violet')
        jobLocation.textContent = job.location
        jobInfoCard.append(jobLocation)

        jobCard.append(jobInfoCard)
        cardContainer.append(jobCard)
    })
}


renderJobCards()