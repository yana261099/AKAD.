$(document).ready(function() {
    $(".green_square").css('position', 'relative').prepend("<img src='images/green_square.jpg' alt='...' style='position: absolute; top: 13px; z-index: -10;'>");
    $(".green_square").css('margin-bottom', '20px')
    $("#advantages > div > div").prepend("<img src='images/green_square.jpg' alt='...' style='position: absolute; top: 33px; z-index: -10;'>");
});