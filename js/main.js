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
		//page2标题加载
        if (top>$('.about-me').offset().top-$(window).height()*0.5){
        	$('.about-me').addClass('about-me-ani');
        };
        //page2技能条加载
        if(top>$('.html-rage').height()-$(window).height()*0.5){
        	$('.content ul li span').addClass('rage-ani')
        }
        //page2info模块加载
        if(top>$('#person-info-pic').height()-$(window).height()*0.5){
        	//pic加载
        	$('#person-info-pic .pho').addClass('pho-load-ani');
        	$('#person-info-pic .edu').addClass('edu-load-ani');
        	$('#person-info-pic .age').addClass('age-load-ani');
        	$('#person-info-pic .loc').addClass('loc-load-ani');
            //txt加载
        	$('#person-info-txt .pho-txt').addClass('photxt-load-ani');
        	$('#person-info-txt .edu-txt').addClass('edutxt-load-ani');
        	$('#person-info-txt .age-txt').addClass('agetxt-load-ani');
        	$('#person-info-txt .loc-txt').addClass('loctxt-load-ani');
        }

        if(top>$('.html-rage').height()-$(window).height()*0.5){

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