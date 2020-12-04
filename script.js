AOS.init()

const $milk2 = document.getElemenById('milk')
const $menu = document.getElemenById('menu')

let menuToggle = false

$milk2.addEventListener('click', function () {

    if (menuToggle === false){
        $milk.style.display = 'block'
        menuToggle = true
    } else if (menuToggle === true){
        $milk.style.display = 'none'
        menuToggle = false
    }
    
})

$menu.addEventListener('click', function () {
    if(menuToggle === false){
        $menu.style.display = 'block'
        menuToggle = true
    } else if (menuToggle === true){
        $menu.style.display = 'none'
        menuToggle = false
    }
})