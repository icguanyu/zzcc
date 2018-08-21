let now = 0
const $silde = $('.slide')

setInterval(function(){
  now = (now + 1)%3
  $silde.fadeOut().eq(now).fadeIn()
},3000)