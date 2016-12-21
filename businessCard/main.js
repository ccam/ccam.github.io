$(document).ready(function() {
    $(".hor").click(function() {
        $(".card").toggleClass('hidden');
        $(".vcard").toggleClass('hidden');
    });

    $(".vert").click(function() {
        $(".vcard").toggleClass('hidden');
        $(".card").toggleClass('hidden');
    });

    $(".QRcode").click(function() {
        $(".employee").toggleClass("hidden");
        $(".QR").toggleClass("hidden");
    })



// Code for the spin animation 
// I didn't write this. src = http://jsfiddle.net/UB2XR/23/ 
// I modified it a little to work for my needs
$('.spin').click(function() {
    AnimateRotate(360)
});

function AnimateRotate(d){
    var elem = $(".vcard, .card");

    $({deg: 0}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            elem.css({
                transform: "rotate(" + now + "deg)"
            });
        }
    });
}

});