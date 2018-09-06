var app = new Vue({
  el: '.all',
  data: {
    data :[],
    filter_keyword: '',
    filter_kinds: 'all',
    filter_weeks: [],
    filter_period: [],
    filter_other: [],
    filter_favorite: false,
    storageArray: []
  },
  created() {
    const vm = this
    vm.getData()
    //讀取localStorage
    vm.storageArray = JSON.parse(localStorage.getItem('item'));
  },
  methods:{
    getData(){
      const vm = this
      const apiUrl ='assets/js/data.json'  
      $.get(apiUrl).then(res=>{
        if(res){
          res.forEach(item=>item['star'] = false)//加星星
          vm.data = res
          if(!vm.storageArray) return
          vm.storageArray.forEach((val)=>{
            const hasStar = vm.data.find(item=>item.id===val)
            hasStar['star'] = true
          })
        }else{
          console.log('失敗')
        }
      })
    },
    addFavorite: function(id){
      const vm = this
      const target = vm.data.find(item=>item.id===id)
      target.star = !target.star
      vm.storageArray = vm.favorite.map((item)=>item.id)
      //存localStorage
      localStorage.setItem('item',JSON.stringify(vm.storageArray))
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
      //過濾條件
      const weekReg = new RegExp(
        this.filter_weeks.length !==0 ? `[${this.filter_weeks.join('')}@]` : `[一二三四五@]`,'gi'
      )
      const periodReg = new RegExp(
        this.filter_period.length !==0 ? `[${this.filter_period.join('')}@]` : `[上下晚@]`
        ,'gi'
      )
      const otherReg = new RegExp(
        this.filter_other.length !==0 ? `[${this.filter_other.join('')}@]` : `.*`
        ,'gi'
      )
      const result = vm.data.filter((item)=>{
        return (
          vm.filter_kinds === 'all' 
          ? 
          item.week.match(weekReg) &&
          item.period.split('')[0].match(periodReg) &&
          item.class_name.match(otherReg) &&
          item.class_name.match(this.filter_keyword)
          :
          item.kinds_1 === vm.filter_kinds &&
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
    }
  }
})

// $('.favorite_icon').click(function(){
//   $('.search_result').toggleClass('hide_result')
//   $('.favorite_box').delay(600).toggleClass('show_favorite')
// })