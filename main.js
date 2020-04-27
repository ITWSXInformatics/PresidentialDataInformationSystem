$("path, circle").hover(function (e) {
    $('#info-box').css('display', 'block');
    $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function (e) {
    $('#info-box').css('display', 'none');
});

$(document).mousemove(function (e) {
    $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
    $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (ios) {
    $('a').on('click touchend', function () {
        var link = $(this).attr('href');
        window.open(link, '_blank');
        return false;
    });
}

// When a menu item is clicked, it is set to the active tab
// and the corresponding SVG is shown
$("li").click(function(event) {
    $("li").removeClass("active");
    $(this).addClass("active");

    $('svg').hide();

    var tab = $(this).attr("id");
    if (tab === "2016") {
        $('#us-map-2016').show();
        $('#description').html("--- descriptions for 2016 ---");
    } else if (tab === "2012") {
        $('#us-map-2012').show();
        $('#description').html("--- descriptions for 2012 ---");
    } else if (tab === "2008") {
        $('#us-map-2008').show();
        $('#description').html("--- descriptions for 2008 ---");
    } else if (tab === "2004") {
        $('#us-map-2004').show();
        $('#description').html("--- descriptions for 2004 ---");
    }

});