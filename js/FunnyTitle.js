 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/fengye.png");
         document.title = '  (\'°A°\')页面崩溃啦！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/fengye.png");
         document.title = 'Hussar博客' + OriginTitle;
         titleTime = setTimeout( () {
             document.title = OriginTitlfunctione;
         }, 2000);
     }
 });