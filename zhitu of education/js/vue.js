var main = new Vue({
	el: '#main',
	data: {
		teacherList:[],
        subjectList:[],
        bannerList:[]
	},
	mounted: function(){
		this.getData();
        
	},
	methods: {
		getData: function(){
			var that = this;
			 $.ajax({
                'url': 'http://api.zhituteam.com/api/index',
                'type': 'get',
                'data': {},
                'dataType': 'json',
                'success': function(res){
                	console.log(res);
                	that.teacherList=res.data.teacher;
                	that.subjectList=res.data.subjects;
                    that.bannerList=res.data.banner;
                    var newBannerList = [];
                    for(var i=0; i<=2; i++){
                        newBannerList = newBannerList.concat(res.data.banner);
                    };
                    that.bannerList = newBannerList;
                    that.swiperBanner();
                },
                'error': function(error){
                	console.log(res);
                }
            })
		},
        swiperBanner:function(){
            var mySwiper = new Swiper ('.swiper-container', {
               autoplay:1000,//--每秒中轮播一次，就是自动滑动
                loop:true,//--可以让图片循环轮播
                autoplayDisableOnInteraction:false,//--在点击之后可以继续实现轮播就是不禁止autoplay
                observer: true,
                
            }) 
        }
	}

});

