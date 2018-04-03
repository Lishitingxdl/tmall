 //top
 $(".totop").click(function () {
        $("html,body").animate({scrollTop: 0})
    })
 //topbar leftbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();//获取滚动高度
        if (st > 800) {
            $(".topbar").show();
        } else {
            $(".topbar").hide();
        }
        if (st > 600) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
}
//楼层
  $(".left_click").click(function(){
  	let index=$(this).index(".left_click");        //不加tips获取到的是兄弟元素中的顺序
  	let ot=$(".mart").eq(index).offset().top-80;
  	$("html,body").animate({scrollTop:ot},300);
  });
  $(window).scroll(function(){        //滚动楼层跳转
  	let st=$(window).scrollTop();
  	$(".mart").each(function(index,ele){
  		if(st>=$(this).offset().top-300){
  			$(".left_click").removeClass("active1").eq(index).addClass("active1");
  		}
  	})
  })
//menu
{
    $(".banner_nav1")
        .mouseenter(function () {
            let index = $(this).index(".banner_nav1");
            $(".menu").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".banner_nav1");
            $(".menu").eq(index).hide();
        })
}
//banner
  {
    $(".banner_pager li").mouseenter(function () {
        let index = $(this).index(".banner_pager li");
        $(".banner_pager li").removeClass("active").eq(index).addClass("active");
        $(".img").removeClass("active").eq(index).addClass("active");
        n = index;
    })

    //自动轮播
    let n = 0;
    let l = $(".img").length;

    let st=setInterval(move, 3000);

    function move() {
        n++;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        $(".banner_pager li").removeClass("active").eq(n).addClass("active");
        $(".img").removeClass("active").eq(n).addClass("active");
        switch (n){
            case "1":$(".banner").removeClass("")
        }
    }

    $(".bannerimg").mouseenter(function () {
        clearInterval(st)
    })
    $(".bannerimg").mouseleave(function () {
        st=setInterval(move,3000);
    })
}