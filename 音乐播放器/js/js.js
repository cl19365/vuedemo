// https://autumnfish.cn/search
// https://autumnfish.cn/comment/hot?type=0

var f = new Vue({
    el: "#f",
    data: {
        search: "",
        musicList: [],
        musicURL: "",
        imgURL: "",
        hotComments: [],
        isPlaying: false,
        isShow: false,
        mvUrl: ""
    },
    methods: {
        searchMusic: function () {
            let that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.search).
                then(function (response) {
                    that.musicList = response.data.result.songs;
                }, function (err) { })
        },
        playMusic: function (id) {
            let than = this;
            axios.get("https://autumnfish.cn/song/url?id=" + id).
                then(function (response) {
                    than.musicURL = response.data.data[0].url;
                },
                    function (err) { });
            axios.get("https://autumnfish.cn/song/detail?ids=" + id).
                then(function (response) {
                    than.imgURL = response.data.songs[0].al.picUrl;
                },
                    function (err) { }),
                axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + id).
                    then(function (response) {
                        than.hotComments = response.data.hotComments;

                    },
                        function (err) { })
        },
        play: function () {
            this.isPlaying = true;
        },
        pause: function () {
            this.isPlaying = false;
        },
        getMv: function (id) {
            let that=this;
            axios.get("https://autumnfish.cn/mv/url?id=" + id).
                then(function (response) {
                    that.isShow = true;
                    that.mvUrl = response.data.data.url;
                },
                     function (err) { })
        },
        hidden:function(){
            this.isShow=false;
        }
    }
})

$("#input").focus(function () {
    $(".top>div").css(
        "border", "1px solid #fff"
    );
})
$("#input").blur(function () {
    $(".top>div").css(
        "border", "0"
    );
})
