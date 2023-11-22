var app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        increase: function(){
            this.count++;
        },
        reset: function(){
            this.count=0;
        }
    },
    // hàm watch là hàm theo dõi biến. Khi biến thay đổi thì watch sẽ hoạt động 
    // và thực hiện một công việc nào đó 
    watch:{
        count:function(newCount){
            if(newCount % 10 === 0){
                alert('Count is divisible by 10!');
            }
        }
    }
  })