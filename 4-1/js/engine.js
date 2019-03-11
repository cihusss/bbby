// console.log(parent.document);

var iframeID;

if (self !== top) {

  iframeID = window.frameElement.id;
  // iframeID = 'bbby';
  parent.document.getElementById(iframeID).style.height = 'auto';
  parent.document.getElementById(iframeID).style.width = '100%';
  // parent.parent.document.getElementById(iframeID).style.height = 'auto';
  // parent.parent.document.getElementById(iframeID).style.width = '100%';

}

function resizeIframes () {

  if (self !== top) {

    parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
    parent.parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
  }
}

window.addEventListener("resize", styleAd);

var x;
var txt;
var wrapperWidth;
var wrapperHeight;

var head = document.getElementById("headline").innerHTML;
var count = document.getElementById("headline").innerHTML.length;

if (count > 55) {
  console.log(count);
  document.getElementById("headline").innerHTML = head.substring(0,51) + " ...";
}

function styleAd(event) {

  x = 0;  
  wrapperWidth = document.getElementById("ad").offsetWidth;
  wrapperHeight = Math.round(wrapperWidth * .315);

  resizeIframes();

    switch(true) {
    
    case (wrapperWidth < 480):
      document.getElementById("left").style.width = "100%";
      document.getElementById("right").style.width = "0%";
      document.getElementById("ad").style.height = "306px";
      document.getElementById("headline").style.fontSize = "14px";
      break;
   
    case (wrapperWidth > 480 && wrapperWidth < 700):
      document.getElementById("left").style.width = "40%";
      document.getElementById("right").style.width = "60%";
      document.getElementById("ad").style.height = "306px";
      document.getElementById("headline").style.fontSize = "14px";
      break;
        
    case (wrapperWidth > 700 && wrapperWidth < 768 ):
      document.getElementById("left").style.width = "40%";
      document.getElementById("right").style.width = "60%";
      document.getElementById("ad").style.height = "306px";
      document.getElementById("headline").style.fontSize = "20px";
      break;
        
    case (wrapperWidth > 768 && wrapperWidth < 1024 ):
      document.getElementById("left").style.width = "40%";
      document.getElementById("right").style.width = "60%";
      document.getElementById("ad").style.height = "306px";
      document.getElementById("headline").style.fontSize = "24px";
      break;
        
    case (wrapperWidth > 1024 && wrapperWidth < 1282):
      document.getElementById("left").style.width = "40%";
      document.getElementById("right").style.width = "60%";
      document.getElementById("ad").style.height = "404px";
      document.getElementById("headline").style.fontSize = "24px";
      break;

    case (wrapperWidth > 1282):
      break;
  }

  // wrapperHeight = Math.round(wrapperWidth * .315);
  document.getElementById("ad").style.height = wrapperHeight + "px";

  txt = x += 1;  
  
  // document.getElementById("counter").innerHTML = txt;
  document.getElementById("width").innerHTML = wrapperWidth;
  document.getElementById("height").innerHTML = wrapperHeight;
}

styleAd();