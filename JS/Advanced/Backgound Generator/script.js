const css = document.querySelector('h3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')

function settingColors() {
    body.style.background = "linear-gradient(to top right, " 
    +color1.value 
    +", " 
    +color2.value 
    +")";    
    css.textContent = body.style.background + ";";
}
color1.addEventListener('input', settingColors)
color2.addEventListener('input', settingColors)
