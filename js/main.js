$(document).ready(function(){
    var pagetop=$(window).height();

	
	/*页面跳转模块*/
	$('.banner').click(function(){
        pagego('banner');
	});
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


	//监听滚动条并在初次载入页面时发生特效
	$(window).scroll(function(){
		var top = $(document).scrollTop();
        if (top>$('.about-me').offset().top-$(window).height()*0.5){
        	$('.about-me').addClass('about-me-ani');
        };
        if(top>$('.html-rage').height()-$(window).height()*0.5){
        	$('.content ul li span').addClass('rage-ani')
        }
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