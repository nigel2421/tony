$(document).ready(function() {
	
	//手机端菜单下拉
	$(".phonenav button").click(function() {
		$(".phonenavlist").slideToggle();
	});
	
	//语言栏下拉
	$(".language-select-btn").click(function() {
		$(".language-select").slideToggle();
	});
	
	//搜索框下拉
	$(".search-bar-btn").click(function() {
		$(".search-bar").slideToggle();
	});
	
	//产品详情大图切换
	$(".proshow-top-img-small img").hover(function() {
		$(".proshow-top-img-big").attr("src", this.src);
	});
	$(".proshow-top-img-small img").click(function() {
		$(".proshow-top-img-big").attr("src", this.src);
	});
	
	//产品详情选项卡
	$(".proshow-content-tab li").click(function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var index = $(".proshow-content-tab li").index(this);
		$(".proshow-content-section section").eq(index).show();
		$(".proshow-content-section section").eq(index).siblings().hide();
	});
	
	//关于我们大图
	$(function() {
		var owl = $("#about1Section5");
		owl.owlCarousel({
			autoPlay: 5000,
			items: 1,
			pagination: true,
		});
	});
	
	//关于我们感谢信
	$(function() {
		var owl = $("#about1Section6");
		owl.owlCarousel({
			autoPlay: 5000,
			items: 3,
			pagination: true,
		});
	});
	
	//服务运输
	$(function() {
		var owl = $("#services2Owl");
		owl.owlCarousel({
			autoPlay: 5000,
			items: 3,
			pagination: true,
		});
	});
	
	$('.backtop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
  
  //产品详情页关联产品
	$(function() {
		var owl = $("#hotProducts");
		owl.owlCarousel({
			autoPlay: 5000,
			items: 4,
			pagination: true,
			scrollPerPage: true
		});
		$(".hot-products-owl-left").click(function() {
			owl.trigger('owl.prev');
		});
		$(".hot-products-owl-right").click(function() {
			owl.trigger('owl.next');
		});
	});
  
  	//下载弹框
	$(".download-box a").click(function() {
		$(".download-float").fadeIn();
	});
	$(".close-btn").click(function() {
		$(".download-float").fadeOut();
	});
  
   //悬浮窗关闭
	$(".float-box button").click(function() {
		$(".float-box").fadeOut();
	});
  
 //领样品
	var num = 0;
	$(".free-bar button").click(function() {
		$(".free-bar").slideUp();
		num = 1;
	});
	$(window).scroll(function() {
		if(num == 0){
			var winPos = $(window).scrollTop();
			if(winPos > 150){
				$(".free-bar").fadeIn();
			}
			if(winPos < 150){
				$(".free-bar").fadeOut();
			}
		}else if(num == 1){
		};
	});


});
