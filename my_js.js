let tabHeader = document.getElementsByClassName("tab-header")[0];
//let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");

    //tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
  });
}

function clockTick()    {
  currentTime = new Date();
 document.getElementById('date').innerHTML=currentTime;
}

setInterval(function(){clockTick();}, 1000);