$(function(){
    $('#hover').mouseenter(function(){
        $('body').addClass('on')
    });
    $('#hover').mouseleave(function(){
        $('body').removeClass('on')
    });
});