import mainCss from './main.css'

const gifsEl = document.querySelector('.gifs')
const searchContainer = document.getElementById('search-container')
const searchInput = document.getElementById('search-input')
const resultsEl = document.querySelector('.results')
const appName = document.querySelector('.app-name')

appName.addEventListener('click', () => location.reload())

async function renderTrending () {
    const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=Uw5xMl9pAcjoNUtsqc0SjYnPhUNRvVPI&limit=50',
        { mode: 'cors' }
    )
    const data = await response.json()
    getGifs(data)
}
renderTrending()

async function renderResults (event) {
    event.preventDefault()

    const input = searchInput.value
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Uw5xMl9pAcjoNUtsqc0SjYnPhUNRvVPI&q=${input}&limit=50`,
        { mode: 'cors' }
    )
    const data = await response.json()
    clearContainer(input)
    getGifs(data)

    searchContainer.reset()
}

searchContainer.addEventListener('submit', renderResults)

function getGifs (data) {
    for (let i = 0; i < data.data.length; i++) {
        const img = document.createElement('img')
        img.src = data.data[i].images.fixed_width.webp
        gifsEl.appendChild(img)
    }
}

function clearContainer (input) {
    gifsEl.innerHTML = ''
    resultsEl.textContent = `Showing results for: "${input}"`
}

function onError (error) {
    console.log(error)
}