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
  wrapperHeight = Math.round(wrapperWidth * .5128);
  resizeIframes();
    
    switch(true) {
    
    case (wrapperWidth < 453):
      document.getElementById("headline").style.fontSize = "14px";
      document.getElementById("left").style.padding = "1rem";
      break;
        
    case (wrapperWidth > 453):
      document.getElementById("headline").style.fontSize = "24px";
      document.getElementById("left").style.padding = "2rem";
      break;
  }
  
  document.getElementById("ad").style.height = wrapperHeight + "px";  
  
  txt = x += 1;  
  
  // document.getElementById("counter").innerHTML = txt;
  document.getElementById("width").innerHTML = wrapperWidth;
  document.getElementById("height").innerHTML = wrapperHeight;
}

styleAd();