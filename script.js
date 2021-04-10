menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let arrow = document.querySelector('.arrow');

window.onscroll = function () {
    if (window.pageYOffset > 800) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
}