let now = 0
const $silde = $('.slide')
//首頁封面slide
setInterval(function(){
  now = (now + 1)%3
  $silde.fadeOut().eq(now).fadeIn()
},5000)

//新聞slide
let counts //視窗顯示數量
const $news_box = $('.news_box')
const $news_list = $('.news_list')
const $block = $('.block')
const length = $block.length
const move = $block.outerWidth(true) //block寬
const containWidth = $block.length*move*2//兩倍數量的寬(因複製)
const star = $('.block').slice(-1).clone() //前面補上尾巴1個
const end = $('.block').slice(0,length-1).clone() //後面補上剩下的

function handler(){
  if($(this).is('.next')){
    $news_list.stop().animate({left:(move*-1) - move},400,()=>{
      $news_list.css({left:move*-1})
      $('.news_list .block').eq(0).appendTo($news_list)
    })
  }else{
    $news_list.stop().animate({left:0},400,()=>{
      $news_list.css({left:move*-1})
      $('.news_list .block').eq(-1).prependTo($news_list)
    })
  } 
}
//判斷視窗寬度決定顯示個數
function checkWidth(){
  let w = $(window).width()
  if(w<=468){
    counts = 1
  }else if(w<=768){
    counts = 2
  }else if(w<=1024){
    counts = 3
  }else{
    counts = 4
  }
  $news_box.css({width:move*counts})
}
$news_list.append(end).prepend(star).css({width:containWidth,left:move*-1})

$(window).on('load',checkWidth)
$(window).on('resize',checkWidth)
$('.prev,.next').click(handler)  
