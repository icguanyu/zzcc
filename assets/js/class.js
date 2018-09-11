(function(){
  var app = new Vue({
    el: '.all',
    data: {
      data :[],
      nowclass: '',
      filter_keyword: '',
      filter_kinds: '',
      filter_weeks: [],
      filter_period: [],
      filter_other: [],
      filter_favorite: false,
      storageArray: [],
      current_page: '',
      per_page:20,//每頁10則
    },
    created() {
      const vm = this
      vm.getData()
      //讀取localStorage
      vm.storageArray = JSON.parse(localStorage.getItem('item'));
    },
    methods:{
      getData: function(){
        const vm = this
        const apiUrl ='../data/data.json'  
        $.get(apiUrl).then(res=>{
          if(res){
            res.forEach(item=>item['star'] = false)//加星星
            vm.data = res
            if(!vm.storageArray) return //load星星
            vm.storageArray.forEach((val)=>{
              const hasStar = vm.data.find(item=>item.id===val)
              hasStar['star'] = true
            })
          }else{
            console.log('失敗')
          }
        })
      },
      showDetail: function(id){
        const vm = this
        $('body').addClass('hide_scroll')
        $(".detail_info").scrollTop(0)
        $('.detail_box').addClass('show_detail')
        //console.log(id)
      },
      closeDetail: function(e){
        $('body').removeClass('hide_scroll') 
        $('.detail_box').removeClass('show_detail')
      },
      addFavorite: function(id){
        const vm = this
        const target = vm.data.find(item=>item.id===id)
        target.star = !target.star
        vm.storageArray = vm.favorite.map((item)=>item.id)
        //存localStorage
        localStorage.setItem('item',JSON.stringify(vm.storageArray))
      },
      clearStar: function(){
        this.data.forEach((item)=>{
          item.star = false
        })
        localStorage.clear()
      },
      pageHandler(key){
        const vm = this
        if(typeof(key)==='number'){
          vm.current_page = key
        }else{
          if(key.target.className==="pre"){
            vm.current_page > 1 && vm.current_page --
          }else if(key.target.className=="next"){
            vm.current_page < vm.pagination.total_page && vm.current_page ++
          }
        }
        const back = $('.search_result').offset().top - $('header').outerHeight()
        $('body,html').animate({scrollTop:back},400)
        $('.page span').eq(vm.current_page-1).addClass('current').siblings().removeClass()
      }
    },
    computed:{
      filterKinds(){
        const vm = this
        const setkinds = new Set(vm.data.map((item)=>item.kinds_1))
        return [...setkinds]
      },
      filterClass(){
        const vm = this
        vm.current_page = 1 //要過濾前返回第一頁
        $('.page span').eq(0).addClass('current').siblings().removeClass()//要過濾前返回第一頁
        //四個條件:種類/星期/時段/特殊
        const kindReg = new RegExp(
          this.filter_kinds ? `^${this.filter_kinds}` : `.*`,'gi'
        )
        const weekReg = new RegExp(
          this.filter_weeks.length !==0 ? `[${this.filter_weeks.join('')}@]` : `.*`,'gi'
        )
        const periodReg = new RegExp(
          this.filter_period.length !==0 ? `[${this.filter_period.join('')}@]` : `.*`,'gi'
        )
        const otherReg = new RegExp(
          this.filter_other.length !==0 ? `[${this.filter_other.join('')}@]` : `.*`,'gi'
        )
        //過濾
        const result = vm.data.filter((item)=>{
          return (
            item.kinds_1.match(kindReg)&&
            item.week.match(weekReg) && 
            item.period.split('')[0].match(periodReg) &&
            item.class_name.match(otherReg) &&
            item.class_name.match(this.filter_keyword)
          )
        })
        return result
      },
      favorite(){
        const vm = this
        const result = vm.data.filter((item)=>item.star)
        return result
      },
      nowClass(){
        const vm = this
        return vm.data.filter(item => item.id === vm.nowclass)
      },
      schedule(){//當下所選課程之課表
        const vm = this
        const target = vm.data.find((item)=>item.id==vm.nowclass)
        let temp = []
        for(i=1;i<19;i++) temp.push({
          'w' : `第${i}週`,
          'theme': target[`w${i}`],
          'intro': target[`w${i}_intro`]
        })
        return temp
      },
      pagination(){
        const vm = this
        const temp = {
          'current_page': vm.current_page,
          'per_page': vm.per_page+1,//
          'page_star' : (vm.current_page-1)*vm.per_page,
          'page_end': vm.current_page*vm.per_page,
          'total_page': Math.ceil(vm.filterClass.length/vm.per_page),
          'has_next': vm.current_page == Math.ceil(vm.filterClass.length/vm.per_page) 
              ? false
              : true,
          'has_prev': vm.current_page == 1 ? false : true,
        }
        return temp
      }
    }
  })
  



  //我的最愛切換
  function toggleResult(){
    $("html,body").scrollTop(0)
    $('.search_result , .search_tools').toggleClass('hide_result')
    $('.favorite_box').toggleClass('show_favorite')
  }
  $('.favorite_icon').click(toggleResult)
  $('.back_to_search').click(toggleResult)

  //回頂端
  const $backTOp = $('.backTop')
  $backTOp.click(function(){
    $("html,body").animate({scrollTop:0},600)
  })
  $(window).scroll(function(){
    var scrollY = $(this).scrollTop()
    scrollY>300?$backTOp.fadeIn():$backTOp.fadeOut()
  })
  //預設第一個按鈕先加上class
  setTimeout(function(){
    $('.page span').eq(0).addClass('current')
  },1000)
  
})()