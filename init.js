$('.nav-link').click(function () {
    $('body').css('padding-top', '0');
});


window.onhashchange = function () {
    $('body').css('padding-top', '65px');
};
