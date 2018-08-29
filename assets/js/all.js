let now = 0
const $silde = $('.slide')

setInterval(function(){
  now = (now + 1)%3
  $silde.fadeOut().eq(now).fadeIn()
},5000)

let $next = $('.next')
let $prev = $('.prev')
let $block = $('.block')
let $news_list = $('.news_list')
let $news_box = $('.news_box')


function newsSlide(){
  const move = $block.outerWidth()
  if($(this).is($next)){
    $news_list.stop().animate({left:move*-1},400,function(){
      $(this).css({left:0})
      $('.block').eq(0).appendTo($news_list)
    })
  }else{
    $news_list.stop().animate({left:move},400,function(){
      $(this).css({left:0})
      $('.block').eq(-1).prependTo($news_list)
    })
  }
}
$next.click(newsSlide)
$prev.click(newsSlide)