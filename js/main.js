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

	$('#bktop').click(function(){
        pagego('banner');
	});	

    function pagego(page){
	    $('html,body').animate({
	    	scrollTop:$('#'+page).offset().top
	    },1000);        
    }

    /*监听滚动条并显示或隐藏返回顶部按钮*/
	$(window).scroll(function(){
		var top = $(document).scrollTop();
        if (top>=0.8*pagetop){
        	$('#bktop').css('display','block')
        }else{
        	$('#bktop').css('display','none')
        }
	})	
});