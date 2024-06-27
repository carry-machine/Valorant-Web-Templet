$(function(){

    $(".ham").click(function(){
        $(".mobile_menu").stop().animate({left:'0'}),
        $(".ham").css({display:'none'})
    })

    $(".mobile_menu .close").click(function(){
        $(".mobile_menu").stop().animate({left:'-100%'})
        $(".ham").fadeIn()
    })
    
    $(".Map_section .col-lg-3").on({
        mouseover:function(){
            $(this).find(".text").stop().fadeIn();
            $(this).find("span").stop().fadeIn();
        },
        
        mouseout:function(){
            $(this).find(".text").stop().fadeOut()
            $(this).find("span").stop().fadeOut()

        }
    })

    $(".Map_section .col-lg-4").on({
        mouseover:function(){
            $(this).find(".text").stop().fadeIn();
            $(this).find("span").stop().fadeIn();
        },
        
        mouseout:function(){
            $(this).find(".text").stop().fadeOut()
            $(this).find("span").stop().fadeOut()

        }
    })

    $(".champ_section .col-lg-3").on({
        mouseover:function(){
            $(this).find(".text").stop().fadeIn();
            $(this).find("span").stop().fadeIn();
            $(this).find(".box").stop().css({border:'none'});
        },
        
        mouseout:function(){
            $(this).find(".text").stop().fadeOut();
            $(this).find("span").stop().fadeOut();
            $(this).find(".box").stop().css({border:'1px solid #000'});

        }
    })
})

