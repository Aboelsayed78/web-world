/*global console, $*/

$(function () {
    'use strict';
    let header = $('.header');
    $(function () {
        header.height($(window).height());
                        
        $(".slider").css({
            marginTop: (header.height() - ($(".slider").height() + $(".navbar").height())) / 2
        });

        // $(".slider i").css({
        //     marginTop: (header.height() - ($(".slider i").height() + $(".navbar").height())) / 2
        // });
    });
    
    $(window).resize(function () {
        header.height($(window).height()),
        $(".slider").height($(window).height() - $(".navbar").height());

        $(".slider").css({
            marginTop: (header.height() - ($(".slider").height() + $(".navbar").height())) / 2
        });
    });

    
/* =============== Trigger For Nice Scroll =============== */
    // $(function () {
    //     $("html").niceScroll({
    //         cursorcolor: '#0BB',
    //         cursorwidth: '8px',
    //         cursorborderradius: "3px"
    //     });
    // });

});