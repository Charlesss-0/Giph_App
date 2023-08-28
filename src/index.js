import mainCss from './main.css'

const gifsEl = document.querySelector('.gifs')
const searchContainer = document.getElementById('search-container')
const searchInput = document.getElementById('search-input')
const resultsEl = document.querySelector('.results')
const appName = document.querySelector('.app-name')

;(function renderTrending () {
    appName.addEventListener('click', () => location.reload())

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=Uw5xMl9pAcjoNUtsqc0SjYnPhUNRvVPI&limit=50')
        .then(response => response.json())
        .then(getGifs)
        .catch(onError)
})()

function RenderResults (event) {
    event.preventDefault()

    const input = searchInput.value

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Uw5xMl9pAcjoNUtsqc0SjYnPhUNRvVPI&q=${input}&limit=50`)
        .then(response => response.json())
        .then(response => {
            gifsEl.innerHTML = ''
            getGifs(response)
            resultsEl.textContent = `Showing results for: "${input}"`
        })
        .catch(onError)

    searchContainer.reset()
}

searchContainer.addEventListener('submit', RenderResults)

function getGifs (response) {
    for (let i = 0; i < response.data.length; i++) {
        const img = document.createElement('img')
        img.src = response.data[i].images.fixed_width.webp

        gifsEl.appendChild(img)
    }
}

function onError (error) {
    console.log(error)
}