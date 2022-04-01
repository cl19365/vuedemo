// http://wthrcdn.etouch.cn/weather_mini

var f=new Vue({
    el:"#f",
    data:{
        city:"",
        weatherList:[]
    },  
    methods:{
        searchWeather:function(){
            var that=this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(response){
                that.weatherList=response.data.data.forecast;
            })
            .catch(function(err){})
        },
        clickSearch:function(e){
            this.city=e;
            this.searchWeather();
            
        }
    }
})