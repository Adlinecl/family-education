$(function(){
	var swiper = new Swiper('.swiper-container', {//用于初始化一个Swiper，返回初始化后的Swiper实例。
	    autoplay:1000,//--每秒中轮播一次，就是自动滑动
        loop:true,//--可以让图片循环轮播
        autoplayDisableOnInteraction:false,//--在点击之后可以继续实现轮播就是不禁止autoplay
        pagination:".swiper-pagination",//--让小圆点显示
        paginationClickable:true,//--实现小圆点点击
        // prevButton:".swiper-button-prev",//--实现上一页的点击
        // nextButton:".swiper-button-next",//--实现下一页的点击
// 　　　　effect:"flip"//--可以实现3D效果的轮播
    });
    $.ajax({
    	url:"http://api.zhituteam.com/api/index",
    	type:"get",
    	dataType:"json",
    	data:{
    		error:"0",
   			message:"success",
    	},
    	success: function(res){
    		console.log(res);
    		var str="";
    		for(var i=0;i<res.data.teacher.length;i++){
                var sub="";
                for(var j=0;j<res.data.teacher[i].subject.length;j++){
                    sub+='<span class="teach-one">'+res.data.teacher[i].subject[j].label+'</span>';
    		    }
                var gra="";
                for(var k=0;k<res.data.teacher[i].grade.length;k++){
                    gra+='<span class="teach">'+res.data.teacher[i].grade[k].label+'</span>';
                }
                str+='<div class="bar"><div class="ms"><img src="'+res.data.teacher[i].image+'" alt=""></div><div class="introduce"><p class="name"><span class="chen">'+res.data.teacher[i].name+'</span>'+sub+''+gra+'<span class="hour">已授200课时</span></p><p class="add">9年教龄</p><p class="work"><span>专职教师</span><span>已认证</span><span>明星教师</span></p></div></div>';
            }
    		$(".person-bar").html(str);
            var pic="";
            for(var z=0;z<res.data.banner.length;z++){
                pic+='<a href="javascript:void(0);" class="swiper-slide"><img src="'+res.data.banner[z].image+'" alt=""></a>';
            }
            $(".swiper-wrapper").html(pic);
            var sub="";
            for(var s=0;s<res.data.subjects.length;s++){
                sub+='<li><img src="'+res.data.subjects[s].icon+'" alt=""></li>';
            }
            $(".clearfix").html(sub);
    	},
    	error: function(res){
    		console.log(res);
    	}
    })
});