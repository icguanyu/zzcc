(function() {
  const $window = $(window);
  const $topinfo = $(".top_info");
  const $header = $("header");
  const $stu_quick_btn = $("#stu_quick_btn");
  const $menu = $('.menu>ul>li')
  const $dropdown = $('.dropdown')
  
  let timer;

  function toggleMenu(){
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      let scrollY = $(this).scrollTop();
      if (scrollY > $topinfo.height()) {
        $header.addClass("header_up");
        $stu_quick_btn.fadeIn();
      } else {
        $header.removeClass("header_up");
        $stu_quick_btn.hide();
      }
    }, 100);
  }
  

  function dropDown(){
    let nowindex = $(this).index()
    console.log(nowindex)
    $dropdown.hide()
    $dropdown.eq(nowindex).show()
  }
  function hideList(){
    $dropdown.hide()
  }

  //Listener
  $window.scroll(toggleMenu);
  $menu.mouseenter(dropDown)
  $menu.mouseleave(hideList)

  //Default
  $stu_quick_btn.hide();
  $dropdown.hide();
})();
