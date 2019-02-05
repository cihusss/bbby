// console.log(parent.document);

var iframeID = window.frameElement.id;

parent.document.getElementById(iframeID).style.height = 'auto';
parent.document.getElementById(iframeID).style.width = '100%';

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
    
    switch(true) {
    
    case (wrapperWidth < 480):
      wrapperHeight = Math.round(wrapperWidth * .4);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      
      document.getElementById("headline").style.fontSize = "14px";
      document.getElementById("left").style.padding = "1rem 1.5rem";
      break;
        
    case (wrapperWidth < 768 && wrapperWidth > 480):
      wrapperHeight = Math.round(wrapperWidth * .2);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      
      document.getElementById("headline").style.fontSize = "14px";
      document.getElementById("left").style.padding = "1rem 1.5rem";
        
      wrapperHeight = Math.round(wrapperWidth * .2);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      break;
        
    case (wrapperWidth > 768 && wrapperWidth < 1100):
      wrapperHeight = Math.round(wrapperWidth * .15);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      
      document.getElementById("headline").style.fontSize = "18px";
      document.getElementById("left").style.padding = "1rem 1.5rem";
      break;
        
    case (wrapperWidth > 1100 && wrapperWidth < 1281):
      wrapperHeight = Math.round(wrapperWidth * .1);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      
      document.getElementById("headline").style.fontSize = "23px";
      document.getElementById("left").style.padding = "1rem 1.5rem";
      break;
  }
  
  
  txt = x += 1;  
  
  // document.getElementById("counter").innerHTML = txt;
  document.getElementById("width").innerHTML = wrapperWidth;
  document.getElementById("height").innerHTML = wrapperHeight;
}

styleAd();