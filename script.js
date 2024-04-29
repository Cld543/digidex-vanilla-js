const digiSelect = document.getElementById('digi-select')
const digiNumEle = document.getElementById('digi-num')
const digiNameEle = document.getElementById('digi-name')
const digiLevelEle = document.getElementById('digi-level')
const digiImg = document.getElementById('digi-pic')
const selectBox = document.getElementById('digi-select')
const backArrow = document.getElementById('back-arrow')
const nextArrow = document.getElementById('next-arrow')
const about = document.getElementById('about')
const modal = document.getElementById('modal-wrapper')

function populateDigimon() {
    for (let i = 0; i < digimon.length; i++) {
        let d = `${i} - ${digimon[i].name}`
        let opt = document.createElement('option')
        opt.value = i
        opt.innerHTML = d
        selectBox.append(opt)
    }
}

digiSelect.addEventListener('change', (e) => {
    let digiName = digimon[e.target.value].name
    let digiNum = e.target.value
    let digiLevel = digimon[e.target.value].level
    
    digiNumEle.innerHTML = digiNum
    digiNameEle.innerHTML = digiName
    digiLevelEle.innerHTML = digiLevel
    digiImg.src = `imgs/${digiName.toLowerCase()}.jpg`
})

function updateDisplay(num, name, level) {
    digiNumEle.innerHTML = num
    digiNameEle.innerHTML = name
    digiLevelEle.innerHTML = level
    digiImg.src = `imgs/${name.toLowerCase()}.jpg`
}

nextArrow.addEventListener('click', () => {
    let maxLength = digimon.length - 1;
    let i = Math.min(Number(selectBox.value) + 1, maxLength)
    selectBox.value = i
    let nextDigimon = digimon[i]
    updateDisplay(i, nextDigimon.name, nextDigimon.level)
})

backArrow.addEventListener('click', () => {
    let i = Math.max(Number(selectBox.value) - 1, 0)
    selectBox.value = i
    let nextDigimon = digimon[i]
    updateDisplay(i, nextDigimon.name, nextDigimon.level)
})

populateDigimon();

