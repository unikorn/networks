/* AniMedia.js v1.0 by Aqualabs
Shared under the MIT License. */

$(window).resize(function () {
    if ($(window).width() < 576 ) {
        $('#offerForm').css("width", "100vw");
        $('#plan').css("width", "85vw");
        $('#time').css("width", "85vw");
        $('#phoneInput').css("width", "85vw");
        $('.flex h1,p').css("max-width", "85vw");
        $('.flex h1').css("font-size", "20px");
    }
    else if ($(window).width() < 768 ) {
        $('#offerForm').css("width", "90vw");
        $('#plan').css("width", "80vw");
        $('#time').css("width", "80vw");
        $('#phoneInput').css("width", "80vw");
        $('.flex h1,p').css("max-width", "80vw");
        $('.flex h1').css("font-size", "24px");
    }
    else if ($(window).width() < 992 ) {
        $('#offerForm').css("width", "75vw");
        $('#plan').css("width", "60vw");
        $('#time').css("width", "60vw");
        $('#phoneInput').css("width", "60vw");
        $('.flex h1,p').css("max-width", "60vw");
        $('.flex h1').css("font-size", "26px");
    }
    else {
        $('#offerForm').css("width", "50vw");
        $('#plan').css("width", "40vw");
        $('#time').css("width", "40vw");
        $('#phoneInput').css("width", "40vw");
        $('.flex h1,p').css("max-width", "40vw");
        $('.flex h1').css("font-size", "32px");
    }
})