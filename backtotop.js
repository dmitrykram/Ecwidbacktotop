var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://cdn.jsdelivr.net/gh/dmitrykram/Ecwidbacktotop@main/backtotop.js";
document.head.appendChild(s);

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}