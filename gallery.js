const gallery = document.getElementById('gallery-wrapper')
const searchbar = document.getElementById('searchbar')
const criteria = document.getElementById('criteria-box')
const digiCards = document.getElementsByClassName('digimon-card')
const levelChoice = document.getElementById('level-choice')
const modal = document.getElementById('modal-wrapper')
const aboutGallery = document.getElementById('gallery-about')
const closeModal = document.getElementById('modal-close')

// Create digimon cards after pulling the data from the 
// digimon array in digimon.js
function loadDigimon(digiList) {
    for (let i = 0; i < digiList.length; i++) {
        let digiCard = document.createElement('div')
        let digiCardHeader = document.createElement('header')
        let digiName = document.createElement('span')
        let digiNum = document.createElement('div')
        let digiPic = document.createElement('img')
        let digiLevel = document.createElement('footer')

        digiCard.classList.add('digimon-card')

        digiCardHeader.classList.add('digi-card-header')

        digiName.classList.add('digi-card-name')
        digiName.innerHTML = digiList[i].name

        digiNum.classList.add('digi-card-num')
        digiNum.innerHTML = i

        digiCardHeader.appendChild(digiNum)
        digiCardHeader.appendChild(digiName)
        
        digiPic.src = `imgs/${digiList[i].name.toLowerCase()}.jpg`
        digiPic.classList.add('digi-card-pic')

        digiLevel.innerHTML = digiList[i].level
        digiLevel.classList.add('digi-card-level')



        digiCard.appendChild(digiCardHeader)
        digiCard.appendChild(digiPic)
        digiCard.appendChild(digiLevel)

        gallery.appendChild(digiCard)
    }
}
loadDigimon(digimon)


searchbar.addEventListener('keyup', () => {
    let searchText = searchbar.value
    let searchCriteria = criteria.value
    
    for (let card of digiCards) {
        if (searchCriteria.toLowerCase() === 'name') {
            let cardName = card.querySelector('.digi-card-name').innerHTML
            if (cardName.toLowerCase().includes(searchText.toLowerCase())) {
                card.style.display = ''
            }
            else {
                card.style.display = 'none'
            }
        }     
    }

})

levelChoice.addEventListener('change', (e) => {
    let chosenLevel = e.target.value.toLowerCase()
    let searchCriteria = criteria.value
    
    for (let card of digiCards) {
        if (searchCriteria.toLowerCase() === 'level') {
            let cardLevel = card.querySelector('.digi-card-level').innerHTML.toLowerCase()
            if (cardLevel.toLowerCase().includes(chosenLevel)) {
                card.style.display = ''
            }
            else {
                card.style.display = 'none'
            }
        }     
    }
})

criteria.addEventListener('change', (e) => {
    if (e.target.value == "level") {
        levelChoice.classList.add('active')
        levelChoice.style.display = "block"
        searchbar.disabled = true;
        searchbar.value=''
    }
    else {
        levelChoice.style.display = "none"
        levelChoice.classList.add('active')
        levelChoice.value = ''
        searchbar.disabled = false;
        searchbar.value = ''

    }
})

aboutGallery.addEventListener('click', () => {
    
    modal.style.display = "block"
})

closeModal.addEventListener('click', () => {
    modal.style.display = "none"
})

