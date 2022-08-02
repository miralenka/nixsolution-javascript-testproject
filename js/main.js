$(document).ready(function () {
    $('.header').height($(window).height());
})

$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)
})

$('#getRandom').click(() => {
    const min = Math.ceil($('#min')[0].value);
    const max = Math.floor($('#max')[0].value);
    $('#result')[0].value = Math.floor(Math.random() * (max - min + 1) + min);
})

$('#random').validate(
    {
        rules: {
            min: {
                required: true,
                number: true
            },
            max: {
                required: true,
                number: true
            }
        }
    }
);
