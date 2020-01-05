$(document).ready(function(){
    var menu = $('.side-menu');
    menu.attr('inert', '');
    $('.btn-menu').on('click', function(){
        if(menu.hasClass('open')){
            menu.removeClass('open'); 
            menu.attr('inert', '');
        }else{
            menu.addClass('open'); 
            menu.removeAttr('inert');
        }
    });
});