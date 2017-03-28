var MainModule = (function ($) {

    const module = {};
    var isMenuOpen = true;
    var elNav = null;

    module.start = function() {
        elNav = $(".menubutton");
        $(".menubutton a").on("click", onMenuClicked);
        $(window).resize(onResize);
    };

    function onMenuClicked(ev) {
      ev.preventDefault();
      $("nav ul").slideToggle(400);
      isMenuOpen = !isMenuOpen;
    };

    function onResize() {
        if (isMenuOpen) {
            return;
        }
        $('nav ul').css('display', elNav.is(':visible') ? 'none' : 'block');
    };

    return module;
}($));

$(document).ready(function() {
    MainModule.start();
});
