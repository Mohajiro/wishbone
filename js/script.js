const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}


function ibg() {
    let ibg = document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if (ibg[i].querySelector('img')) { ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'; } }

}

ibg();