/* AniMedia.js v1.0 by Aqualabs
Shared under the MIT License. */

$(document).ready(function () {
    if ($(window).width() < 576 ) {
        $('.flex h1,p').css("max-width", "85vw");
        $('.flex h1').css("font-size", "20px");
    }
    else if ($(window).width() < 768 ) {
        $('.flex h1,p').css("max-width", "80vw");
        $('.flex h1').css("font-size", "24px");
    }
    else if ($(window).width() < 992 ) {
        $('.flex h1,p').css("max-width", "60vw");
        $('.flex h1').css("font-size", "26px");
    }
    else {
        $('.flex h1,p').css("max-width", "40vw");
        $('.flex h1').css("font-size", "32px");
    }
})

$(window).resize(function () {
    if ($(window).width() < 576 ) {
        $('.flex h1,p').css("max-width", "85vw");
        $('.flex h1').css("font-size", "20px");
    }
    else if ($(window).width() < 768 ) {
        $('.flex h1,p').css("max-width", "80vw");
        $('.flex h1').css("font-size", "24px");
    }
    else if ($(window).width() < 992 ) {
        $('.flex h1,p').css("max-width", "60vw");
        $('.flex h1').css("font-size", "26px");
    }
    else {
        $('.flex h1,p').css("max-width", "40vw");
        $('.flex h1').css("font-size", "32px");
    }
})