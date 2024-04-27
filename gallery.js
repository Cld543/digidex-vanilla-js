const gallery = document.getElementById('gallery-wrapper')


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