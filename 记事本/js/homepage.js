var f=new Vue({
    el:"#f",
    data:{
        list:[
            "vue",
            "spring",
            "java"
        ],
        inputValue:""
    },
    methods:{
        add:function(){
            this.list.push(this.inputValue);
            $(".d2>div").css("display","block");

        },
        remove:function(e){
            // splice(e,1) 删除数组中指定索引位指定数量的值
            this.list.splice(e,1);
            if(this.list.length<1){
                $(".d2>div").css("display","none");
            }
        },
        changeBackground:function(){
            $(".d1 li").mouseover(function(){
            $(this).css("background-color", "rgba(87, 87, 87, 0.700)");
            $(this).find(".destroy").css("display","block");
        });
            $(".d1 li").mouseout(function(){
            $(this).css("background-color", "rgba(87, 87, 87, 0)");
            $(this).find(".destroy").css("display","none");
        });

        },
        clear:function(){
            this.list=[];
    $(".d2>div").css("display","none");
        },

    }
})

