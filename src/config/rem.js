(function(doc,window){
    var docEl = doc.documentElement, 
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
         resetFont = function(){
             var clientWidth = docEl.clientWidth
             if(!clientWidth) return
             docEl.style.fontSize = 10*(clientWidth/375) + 'px'
         };
         window.addEventListener(resizeEvent,resetFont,false)
         doc.addEventListener('DOMContentLoaded',resetFont,false)
})(document,window)



// (function(doc,win){
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function(){
//           var clientWidth = docEl.clientWidth;
//           if(!clientWidth) return;
//           docEl.style.fontSize = 20*(clientWidth/320) +'px';
//         };
//         if(!doc.addEventListener) return;
//         win.addEventListener(resizeEvt,recalc,false);
//         doc.addEventListener('DOMContentLoaded',recalc,false);
//   })(document,window);