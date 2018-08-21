(function() {
  const $window = $(window);
  const $document = $(document);
  const $header = $('header');
  const $footer = $('footer')
  const $m_menu = $('.mobile_menu');
  const menu_templete = `
    <div class="container">
      <div class="top_info">
        <div class="logo">
          <!-- <p>台北市私立開南高級商工職業學校承辦</p> -->
          <img class="logo_pc" src="assets/img/logo.png" alt="">
          <img class="logo_mobile" src="assets/img/logo_mobile.png" alt="">
        </div>
        <div class="quick_link">
          <div class="three_quick_link">
            <a href="#"><i class="fas fa-caret-right"></i>講師到課查詢</a>
            <a href="#"><i class="fas fa-caret-right"></i>學員到課查詢</a>
            <a href="#"><i class="fas fa-caret-right"></i>開南商工</a>
          </div>
          <a href="#" class="quick_btn teacher_link">講師投課</a>
          <a href="#" class="quick_btn student_link"><i class="fas fa-book-reader"></i>課程一覽</a>
          <div class="hamburgur">
            <div class="nav_icon"></div>
          </div>
        </div>
      </div>
      <div class="menu">
        <ul class="parent_list">
          <li>
            <a href="javascript:;">課務專區</a>
            <div class="dropdown">
              <ul class="child_list">
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>最新課程一覽</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>如何報名</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>報名表下載</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="javascript:;">校務行政</a>
            <div class="dropdown">
              <ul class="child_list">
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>行事曆</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>講師週報</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>學員週報</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>課程異動申請</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>表單下載</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="javascript:;">學員專屬</a>
            <div class="dropdown">
              <ul class="child_list">
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>研習證明申請</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>榮譽榜</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>學習收藏</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="javascript:;">多元主題</a>
            <div class="dropdown">
              <ul class="child_list">
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>專案課程</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>社區營造</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>踅中正</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>公民素養週</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>成果展回顧</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="javascript:;">社大介紹</a>
            <div class="dropdown">
              <ul class="child_list">
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>關於社大</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>校園環境</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>聯絡方式</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>社大Q&A</a></li>
                <li><a href="javascript:;"><i class="fas fa-caret-right"></i>團保內容</a></li>
              </ul>
            </div>
          </li>
          <a href="#" id="stu_quick_btn" class="quick_btn student_link"><i class="fas fa-book-reader"></i>課程一覽</a>
        </ul>
      </div>
    </div>
  `
  const mobile_menu_templete = `
    <div class="mobile_block_list">
      <p><i class="fas fa-caret-right"></i>課務專區</p>
      <div class="items">
        <a href="javascript:;">最新課程一覽</a>
        <a href="javascript:;">如何報名</a>
        <a href="javascript:;">報名表下載</a>
      </div>
    </div>
    <div class="mobile_block_list">
      <p><i class="fas fa-caret-right"></i>校務行政</p>
      <div class="items">
        <a href="javascript:;">行事曆</a>
        <a href="javascript:;">講師週報</a>
        <a href="javascript:;">學員週報</a>
        <a href="javascript:;">課程異動申請</a>
        <a href="javascript:;">表單下載</a>
      </div>
    </div>
    <div class="mobile_block_list">
      <p><i class="fas fa-caret-right"></i>學員專區</p>
      <div class="items">
        <a href="javascript:;">研習證明申請</a>
        <a href="javascript:;">榮譽榜</a>
        <a href="javascript:;">學習收藏</a>
      </div>
    </div>
    <div class="mobile_block_list">
      <p><i class="fas fa-caret-right"></i>多元主題</p>
      <div class="items">
        <a href="javascript:;">專案課程</a>
        <a href="javascript:;">社區營造</a>
        <a href="javascript:;">踅中正</a>
        <a href="javascript:;">公民素養週</a>
        <a href="javascript:;">成果展回顧</a>
      </div>
    </div>
    <div class="mobile_block_list">
      <p><i class="fas fa-caret-right"></i>社大介紹</p>
      <div class="items">
        <a href="javascript:;">關於社大</a>
        <a href="javascript:;">校園環境</a>
        <a href="javascript:;">聯絡方式</a>
        <a href="javascript:;">社大Q&A</a>
        <a href="javascript:;">團保內容</a>
      </div>
    </div>
    <div class="mobile_menu_bottom">
      <h1><i class="fas fa-phone-volume"></i>02-2327-8441</h1>
      <p>（週一至週五10:00-20:00）</p>
      <div class="byemail"><i class="far fa-envelope-open"></i>或寄信給我們</div>
      <p><i class="fas fa-map-marker-alt"></i>100臺北市中正區濟南路一段六號</p>
    </div>
  `
  const footer_templete = `
    <div class="copyright">
      <div class="copyright_inner">
        <div class="left">
          <p>100‧臺北市中正區濟南路一段六號</p>
          <p>TEL 02-2327-8441　FAX 02-2341-0945</p>
        </div>
        <div class="mid">
          <p>內容版權屬於相關著作權所有人，未經正式書面授權禁止轉貼節錄</p>
          <p>(C) Copyright 臺北市中正社區大學 all Rights reserved.</p>
        </div>
        <div class="rigth">
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-facebook-square"></i></a>
          <a href="#"><i class="fas fa-map-marked-alt"></i></a>
        </div>
      </div>
    </div>
  `
  function SetMenu(){
    //載入PC/手機
    $header.append(menu_templete)
    $m_menu.append(mobile_menu_templete)
    $footer.append(footer_templete)
    //定義選單內DOM
    const $hamburgur = $(".hamburgur");
    const $topinfo = $('.top_info');
    const $stu_quick_btn = $('#stu_quick_btn');
    const $menu = $('.menu>ul>li');
    const $dropdown = $(".dropdown");

    //手機選單
    $hamburgur.click(function(e) {
      $(this)
        .children()
        .toggleClass('nav_open');
      $m_menu.toggleClass('mobile_menu_open');
      e.stopPropagation();
    });
    $document.click(function() {
      $hamburgur.children().removeClass('nav_open')
      $m_menu.removeClass('mobile_menu_open')
    });

    //隱藏top_info
    let timer;
    function toggleMenu() {
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
  
    function dropDown() {
      let nowindex = $(this).index();
      console.log(nowindex);
      $dropdown.hide();
      $dropdown.eq(nowindex).show();
    }
  
    //Listener
    //滾輪事件
    $window.scroll(toggleMenu);
    //PC選單
    $menu.mouseenter(dropDown);
    $menu.mouseleave(()=>{$dropdown.hide()});
    
    //Default//預設隱藏
    $stu_quick_btn.hide();
    $dropdown.hide();
  }
  //Default
  //載入選單及所有動態事件
  $document.ready(SetMenu)

})();
