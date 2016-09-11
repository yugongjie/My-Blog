$(document).ready(function(){
    var pagetop=$(window).height();
	
	/*页面跳转模块*/
	$('.aboutthis').click(function(){
        pagego('aboutthis');
	});

	$('.blog').click(function(){
        pagego('blog');
	});

	$('.contactme').click(function(){
        pagego('contactme');
	});	
    function pagego(page){
	    $('html,body').animate({
	    	scrollTop:$('#'+page).offset().top
	    },1000);        
    };

	$('#bktop').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
	});

    /*监听滚动条并显示或隐藏返回顶部按钮*/
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		console.log(top)
        if (top>0.6*pagetop){
        	$('#bktop').fadeIn(300)
        }else{
        	$('#bktop').fadeOut(300)
        };
	});
    
    // 右上角微信及推特的提示框弹出及隐藏
	$('.wechat').click(function(){
        $('.my-wechat').slideToggle(300)
	});
	$('.wechat').blur(function(){
		$('.my-wechat').slideUp(300)
	})
	$('.twitter').click(function(){
        $('.not-found').slideToggle(300)
	});
	$('.twitter').blur(function(){
		$('.not-found').slideUp(300)
	})

});