let div = document.createElement('div');
div.className = "myBtn";
div.innerHTML = '<button onclick="topFunction()" id="myBtn" title="Back to top"></button>';
div.style.cssText = 'position: fixed;bottom: -160px;right: -200px;z-index: 99;cursor: pointer;padding: 15px;font-size: 18px;'

document.body.append(div);

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

backbutton = document.getElementById("myBtn");
backbutton.style.backgroundColor = color.btncolor;
backbutton.style.textContent = color.textvalue;
backbutton.style.opacity = color.opacityvalue;
backbutton.style.width = color.widthvalue;
backbutton.style.height = color.heightvalue;
backbutton.style.borderRadius = color.borderrad; 

publicConfig = Ecwid.getAppPublicConfig('custom-app-64446204-2');
color = JSON.parse(publicConfig);
console.log(color.btncolor);

color = JSON.parse(publicConfig);
console.log(color.textvalue);

color = JSON.parse(publicConfig);
console.log(color.opacityvalue);

color = JSON.parse(publicConfig);
console.log(color.widthvalue);

color = JSON.parse(publicConfig);
console.log(color.heightvalue);

color = JSON.parse(publicConfig);
console.log(color.borderrad);