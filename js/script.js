// tools toogle
const navbarNav = document.querySelector('.navbar-nav');
const hMenu = document.querySelector('#hambuerger-menu')

//ketika hamburgermenu di click
hMenu.addEventListener("click", function(){
    navbarNav.classList.toggle('active')
})
//clik diluar untuk menghilangkan nav
document.addEventListener("click",function(a){
    if(!hMenu.contains(a.target)&& !navbarNav.contains(a.target)){
        navbarNav.classList.remove('active')
    }
})

