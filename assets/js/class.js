var app = new Vue({
  el: '.all',
  data: {
    data :[],
    storageArray: []
  },
  created() {
    const vm = this
    vm.getData()
  },
  methods:{
    getData(){
      const vm = this
      const apiUrl ='assets/js/data.json'  
      $.get(apiUrl).then(res=>{
        if(res){
          res.forEach(item=>item['star'] = false)//加星星
          vm.data = res
        }else{
          console.log('失敗')
        }
      })
    }
  },
  computed:{
    filterKinds(){
      const vm = this
      const setkinds = new Set(vm.data.map((item)=>item.kinds_1))
      return [...setkinds]
    }
  }
})