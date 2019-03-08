// console.log(parent.document);

var iframeID;

if (self !== top) {

  // iframeID = window.frameElement.id;
  iframeID = "google_ads_iframe_/38091560/BBB/Search_1"
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
    
    switch(true) {
    
    case (wrapperWidth < 480):
      wrapperHeight = Math.round(wrapperWidth * .4);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      // parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      resizeIframes();
      
      document.getElementById("headline").style.fontSize = "14px";
      document.getElementById("left").style.padding = "1rem 1.5rem";
      break;
        
    case (wrapperWidth < 768 && wrapperWidth > 480):
      wrapperHeight = Math.round(wrapperWidth * .2);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      // parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      resizeIframes();
      
      document.getElementById("headline").style.fontSize = "14px";
      document.getElementById("left").style.padding = "1rem 1.5rem";
        
      wrapperHeight = Math.round(wrapperWidth * .2);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      break;
        
    case (wrapperWidth > 768 && wrapperWidth < 1100):
      wrapperHeight = Math.round(wrapperWidth * .15);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      // parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      resizeIframes();
      
      document.getElementById("headline").style.fontSize = "18px";
      document.getElementById("left").style.padding = "1rem 1.5rem";
      break;
        
    case (wrapperWidth > 1100 && wrapperWidth < 1281):
      wrapperHeight = Math.round(wrapperWidth * .1);
      document.getElementById("ad").style.height = wrapperHeight + "px";
      // parent.document.getElementById(iframeID).style.height = wrapperHeight + "px";
      resizeIframes();
      
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