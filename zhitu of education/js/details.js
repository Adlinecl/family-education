var main = new Vue({
	el: '#main',
	data: {
    	teacherList:{            
             subject:[0], 
             grade:[0],
             type:[0], 
             extend_tag:[0],
             // teacher_case:[],
             teacher_experience:[0],         
       },
        teacher:[],
       
        
	},
	mounted: function(){
		this.getData();
        // console.log(document.write(location.search));
	},
	methods: {
		getData: function(){
			var that = this;
			 $.ajax({
                'url': 'http://api.zhituteam.com/api/teacher/info',
                'type': 'get',
                'data': {
                    id: window.location.search.split("=")[1],
                },
                'dataType': 'json',
                'success': function(res){
                	console.log(res);
                	that.teacherList = res.data.teacher;
                    that.teacher = res.data.teacher.teacher_case;
                },
                'error': function(error){
                	console.log(res);
                }
            })
		},
        
	}

});

