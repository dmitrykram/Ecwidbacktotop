let div = document.createElement('div');
div.className = "myBtn";
div.innerHTML = '<button onclick="topFunction()" id="myBtn" title="Back to top"></button>';


div.style.cssText = 'display: none;position: fixed;bottom: 73px;right: -5px;z-index: 99;cursor: pointer;padding: 15px;font-size: 18px;';
document.body.append(div);

var backbutton = document.getElementById("myBtn");

publicConfig = Ecwid.getAppPublicConfig('custom-app-64446204-2');
var color = JSON.parse(publicConfig);
console.log(color.btncolor);
backbutton.style.backgroundColor = color.btncolor;
console.log(color.textvalue);
backbutton.style.textContent = color.textvalue;
console.log(color.opacityvalue);
backbutton.style.opacity = color.opacityvalue;
console.log(color.widthvalue);
backbutton.style.width = color.widthvalue;
console.log(color.heightvalue);
backbutton.style.height = color.heightvalue;
console.log(color.borderrad);
backbutton.style.borderRadius = color.borderrad;


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

