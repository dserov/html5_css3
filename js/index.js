$(document).ready(function () {
    // no display on default
    $('.documentation__list_toggle').css({"display": "none"});
    $('.documentation__button-toggle').click(function (e) {
        $(this).toggleClass('documentation__button-toggle_active');
        $('.documentation__list.documentation__list_toggle').slideToggle('slow');
    });

    $('#infrastru-tabs').tabs({
        activate: function (event, ui) {
            let id = ui.newPanel[0].id;
            let img = window.document.location.pathname.replace('index.html', 'img/infrastructura-' + id + '.png');
            // change bg image
            $('.infrastru').css('background-image', 'url("' + img + '")');
        }
    });

    $('#select-month').selectmenu();

    let $root = $('html, body');
    $('a[href^="#"]').click(function () {
        let href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });

        return false;
    });
});
