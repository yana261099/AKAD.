$(document).ready(function() {
    $("#portfolio_list > div:nth-child(3) p").hover(
        function(){
            $("#portfolio_list > div:nth-child(2)").css('background-color', 'transparent');
            $("#portfolio_list > div:nth-child(2) p").css('color', '#666666');
            $("#portfolio_imgs div img").css('opacity', '0.2');
        }, 
        function(){
            $("#portfolio_list > div:nth-child(2)").css('background-color', '');
            $("#portfolio_list > div:nth-child(2) p").css('color', '');
        }
    );


    //webdesign

    $("#portfolio_list > div:nth-child(3) p:nth-child(1)").hover(
        function(){
            $("#portfolio_imgs div:nth-child(3) img:nth-child(1)").css({'opacity': '1', 'border': 'solid white 3px', 'box-shadow': '0 0 50px rgba(0, 0, 0, 0.25)'});
        }, 
        function(){
            $("#portfolio_imgs div img").css({'opacity': '', 'border': '', 'box-shadow': ''});
        }
    );

    //graphic design

    $("#portfolio_list > div:nth-child(3) p:nth-child(2)").hover(
        function(){
            $("#portfolio_imgs div:nth-child(2) img:nth-child(1)").css({'opacity': '1', 'border': 'solid white 3px', 'box-shadow': '0 0 50px rgba(0, 0, 0, 0.25)'});
        }, 
        function(){
            $("#portfolio_imgs div img").css({'opacity': '', 'border': '', 'box-shadow': ''});
        }
    );

    //fashion

    $("#portfolio_list > div:nth-child(3) p:nth-child(3)").hover(
        function(){
            $("#portfolio_imgs div:nth-child(1) img:nth-child(1), #portfolio_imgs div:nth-child(3) img:nth-child(2)").css({'opacity': '1', 'border': 'solid white 3px', 'box-shadow': '0 0 50px rgba(0, 0, 0, 0.25)'});
        }, 
        function(){
            $("#portfolio_imgs div img").css({'opacity': '', 'border': '', 'box-shadow': ''});
        }
    );

    //logo design

    $("#portfolio_list > div:nth-child(3) p:nth-child(4)").hover(
        function(){
            $("#portfolio_imgs div:nth-child(1) img:nth-child(3), #portfolio_imgs div:nth-child(2) img:nth-child(2), #portfolio_imgs div:nth-child(3) img:nth-child(3)").css({'opacity': '1', 'border': 'solid white 3px', 'box-shadow': '0 0 50px rgba(0, 0, 0, 0.25)'});
        }, 
        function(){
            $("#portfolio_imgs div img").css({'opacity': '', 'border': '', 'box-shadow': ''});
        }
    );

    //advertising

    $("#portfolio_list > div:nth-child(3) p:nth-child(5)").hover(
        function(){
            $("#portfolio_imgs div:nth-child(1) img:nth-child(2), #portfolio_imgs div:nth-child(2) img:nth-child(3)").css({'opacity': '1', 'border': 'solid white 3px', 'box-shadow': '0 0 50px rgba(0, 0, 0, 0.25)'});
        }, 
        function(){
            $("#portfolio_imgs div img").css({'opacity': '', 'border': '', 'box-shadow': ''});
        }
    );
});