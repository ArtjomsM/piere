// To Top Button
topBtn = document.querySelector('.to-top');

window.onscroll = function () { scrollFunction() };

const scrollFunction = () => {
    if (document.body.scrollTop > 2550 || document.documentElement.scrollTop > 2550) {
        topBtn.style.display = "none";
    } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    }
    else {
        topBtn.style.display = "none";
    }
}

const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}