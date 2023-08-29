$('p').click(function () {
    $(this).slideToggle('slow');
});

$('button').hover(function () {
    $(this).removeClass('makeBlue').addClass('makeRed');
}, function () {
    $(this).removeClass('makeRed').addClass('makeBlue');
});

$(document).ready(function(){
    $('.box').click(function(){
        var classNames = $(this).attr('class').split(' ');
        $('.'+ classNames[1]).css('background-color', 'red');
    });
});