$(document).ready(function(){
    $(".top_btn").hide();
    $('html, body').animate({scrollTop : 0}, 500);
    
    //스크롤 다운시 헤더컬러
    $(window).scroll(function () {
        let height = $(document).scrollTop();
        if(height!=0){
            $(".header").addClass("scroll");
            $(".animated-title").fadeOut('slow');
            if($(this).scrollTop() > 100){$(".top_btn").fadeIn();}
            else{$(".top_btn").fadeOut();}
        }else{
            $(".header").removeClass("scroll");
            $(".animated-title").fadeIn();
        }
    }); 
    
    //skill explain
    $(".skills article section i").hover(function(){
        $(this).parent("h4").siblings("p").stop().show();
    },function(){
        $(this).parent("h4").siblings("p").stop().hide();
    });
    
    //works마우스호버시 설명fade
    $(".content .works .list a").hover(function(){
        $(this).find(".sub").stop().fadeIn('fast');
    },function(){
        $(this).find(".sub").stop().fadeOut('fast');        
    });
    
    let len = 0;
    let slideIdx=1;
    let imgwidth=0;
    //works popup
    $(".works .list div").click(function(){
       $(".modal_bg").fadeIn('fast');
       $('html').css({overflow:'hidden'});
    });
    $(".works .list div").eq(0).click(function(){
        $(".modal_layout .modal_content_1").animate({height:"90%"},'fast');
        len=$(".modal_content_1").find(".img_con").length;
       //console.log("popup1 선택 / list길이: "+len);
    });
    $(".works .list div").eq(1).click(function(){
        $(".modal_layout .modal_content_2").animate({height:"90%"},'fast');
       len=$(".modal_content_2").find(".img_con").length;
       //console.log("popup2 선택 / list길이: "+len);
    });
    $(".works .list div").eq(2).click(function(){
        $(".modal_layout .modal_content_3").animate({height:"90%"},'fast');
       len=$(".modal_content_3").find(".img_con").length;
       //console.log("popup3 선택 / list길이: "+len);
    });
    $(".works .list div").eq(3).click(function(){
        $(".modal_layout .modal_content_4").animate({height:"90%"},'fast');
       len=$(".modal_content_4").find(".img_con").length;
       //console.log("popup4 선택 / list길이: "+len);
    });
    $(".works .list div").eq(4).click(function(){
        $(".modal_layout .modal_content_5").animate({height:"90%"},'fast');
       len=$(".modal_content_5").find(".img_con").length;
       //console.log("popup5 선택 / list길이: "+len);
    });  
    
    $(".modal_layout a.close").click(function(){
       $('html').css({overflow:'scroll'});
       $(".modal_bg").fadeOut('fast');
       $(".modal_layout").find("article").animate({height:0},'fast');
       slideIdx=1; //상태초기화
       $(".img_list").css({transform:"translateX(0px)"}); 
    });
  
    $(".modal_layout .btn_area .next").click(function(){
        if(slideIdx===len){
            slideIdx=1;
            //console.log(slideIdx);
            imgwidth=$(".modal_layout .img_area img").width();
            console.log(imgwidth);
            $(".img_list").css({transform:"translateX(0px)"});
        }else{
            slideIdx++;
            //console.log(slideIdx);
            imgwidth=$(".modal_layout .img_area img").width();
            console.log(imgwidth);
            $(".img_list").css({transform:"translateX(-"+imgwidth*(slideIdx-1)+"px)"});
        }
    });
    $(".modal_layout .btn_area .prev").click(function(){
        if(slideIdx===1){
            slideIdx=len;
            //console.log(slideIdx);
            imgwidth=$(".modal_layout .img_area img").width();
            console.log(imgwidth);
            $(".img_list").css({transform:"translateX(-"+imgwidth*(len-1)+"px)"});
        }else{
            slideIdx--;
            //console.log(slideIdx);
            imgwidth=$(".modal_layout .img_area img").width();
            console.log(imgwidth);
            $(".img_list").css({transform:"translateX(-"+imgwidth*(slideIdx-1)+"px)"});
        }
    });//modal slide
    
    
 
});
//gnb 스크롤이동
function fnMove(seq){
    let offset = $('#'+seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 500);
}
//top으로 이동
function topMove(){
    $('html, body').animate({scrollTop : 0}, 500);
}