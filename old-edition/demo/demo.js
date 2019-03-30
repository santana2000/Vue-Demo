var app = new Vue({
    el:'#container',
    data:{
        statusnow:false,
        width:400

    },
    methods:{
        countdown:function () {
            this.width -=40;
            if(this.width<=0){
                this.statusnow = true
            }
        },
        restart:function () {
            this.width = 400;
            this.statusnow=false

        }
    }
});