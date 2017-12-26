
// 监听浏览器,针对不同分辨率计算font-size
// 15px —> 1rem iPhone6的宽度是375 375/15=25rem


(function (docs, win) {
    var docEls = docs.documentElement,
    resizeEvts = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalcs = function () {
  
    //getBoundingClientRect()这个方法返回一个矩形对象
  
    window.rem = docEls.getBoundingClientRect().width/25;
    docEls.style.fontSize = window.rem + 'px';
  
  };
    recalcs();
    if (!docs.addEventListener) return;
    win.addEventListener(resizeEvts, recalcs, false);
  })(document, window);



