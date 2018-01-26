if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.min.js').then(function (registration) {
    }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

$(document).ready(function () {

    $(document).click(function (e) {
        var container = $("#wohnungen");
        var elem = $(".grid-second-menu");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if (!elem.is(e.target) && elem.has(e.target).length === 0) {
                elem.css("visibility", "hidden");
                elem.css("opacity", 0);
            }
        } else {
            elem.css("visibility", "visible");
            elem.css("opacity", 1);
        }
    });

    $('#anfrage, .button-anfrage, #anfrage-bottom').click(function () {
        $("html").animate({
            scrollTop: $(document).height() - $('.display-main-5')[0].scrollHeight
        }, 1000);
    });

    $('#anfahrt, #anfahrt-bottom').click(function () {
        $("html").animate({
            scrollTop: $(document).height() - $('.display-main-4')[0].scrollHeight - $('.display-main-5')[0].scrollHeight - $('.footer')[0].scrollHeight
        }, 1000);
    });

    $('.grid-arrow-down i').click(function () {
        $("html").animate({
            scrollTop: $('.display-main-3')[0].scrollHeight
        }, 1000);
    });

    $('.grid-arrow-down-wohnung i').click(function () {
        $("html").animate({
            scrollTop: $('.display-main-5')[0].scrollHeight
        }, 1000);
    });

    $('.photo-over').click(function (e) {
        var name = $(this).parent().attr('data-name');
        var id = $(this).parent().attr('data-id');

        $("html").animate({
            scrollTop: 0
        }, 1000);

        $('.gallery').css('visibility', 'visible');
        $('.gallery .overlay').css('opacity', 0.8);

        $('.gallery>div>img').attr('src', '/img/' + name + '_page.jpeg');
        $('.gallery>div>img').attr('data-id', id);
    });

    $('#close, .gallery>.overlay').click(function () {
        $('.gallery .overlay').css('opacity', 0);
        $('.gallery>div>img').attr('src', '');
        $('.gallery>div>img').attr('data-id', 0);
        $('.gallery').css('visibility', 'hidden');
    });

    $('#left').click(function (event) {
        var id = $('.gallery>div>img').attr('data-id');
        var name = "wohnung";
        if(id > 1){
            --id;
        }
        if(id === 1 || id === 0){
            id = 6;
        }

        $('.gallery>div>img').attr('src', '/img/' + name + id + '_page.jpeg');
        $('.gallery>div>img').attr('data-id', id);
    });

    $('#right').click(function (event) {
        var id = $('.gallery>div>img').attr('data-id');
        var name = "wohnung";
        if(id < 6){
            ++id;
        }
        if(id === 6){
            id = 1;
        }

        $('.gallery>div>img').attr('src', '/img/' + name + id + '_page.jpeg');
        $('.gallery>div>img').attr('data-id', id);
    });
});

window.onload = function () {
    $(".preloader").hide();
    $('.map iframe').attr('src', 'https://www.google.com/maps/embed/v1/place?q=place:Goettingen&key=AIzaSyD6CHCQODTf_Xp8WF1BOxTBmvU8inT4Q60');
}