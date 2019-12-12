/* Networks Landing Scripts
Made by Alex Komlev & Aqualabs, 2019.
This document is sharing under the MIT License. */


jQuery(document).ready(function($) {

    /* Offer Form Calculation */

    $('.btn.ofb').on('click', function(){
        var tarif = $(this).parent().parent().find('.nameTarif').text();
        $('#inputGroupSelect01 option').each(function(){
            if($(this).val() == tarif)
                $(this).prop('selected', true);
        })
        $('#offerForm').show();
        $('#offerForm').css("display", "flex");
        var price = $('#inputGroupSelect01 option:selected').data('price');
        var period = $('#inputGroupSelect02 option:selected').val();
        $('.pricement span').text(+price * period+'€');
        $('#inputGroupSelect02 option, #inputGroupSelect01 option').on('click', function(){
            var price = $('#inputGroupSelect01 option:selected').data('price');
            var period = $('#inputGroupSelect02 option:selected').val();
            $('.pricement span').text(+price * period+'€');
        })
    })
    $('.close').on('click', function(){
        $('#offerForm').hide();
        $('#offerForm').css("display", "none");
    })
    $('#paymentConfirmation').on('click', function(){
        $('#offerForm').hide();
        $('#offerForm').css("display", "none");
        $('.alert').show();
    })
    $('#paymentCancel').on('click', function(){
        $('#offerForm').hide();
        $('#offerForm').css("display", "none");
    })

    /* Repeatable Alert */

    $(function() {
        $('[data-hide]').on('click', function() {
            $("." + $(this).attr('data-hide')).hide();
        })
    })
    $('#inputPhone').change(function() {
        var phoneValue = $('#inputPhone').val();
        console.log(phoneValue);
    })
    $('#phoneMailSelector option').on('click', function() {
        var choice = $('#phoneMailSelector option:selected').val();
        console.log(choice);
        $('#phoneMailSelector').each(function () {
            if (choice == 'phone') {
                $('#inputPhone').attr("placeholder", "+380(12)-345-67-89");
            }
            else if (choice == 'email') {
                $('#inputPhone').attr("placeholder", "example@example.com");
            }
        })
    })
});

/* Window Resizer same as @media rules */

$(window).resize(function () {
    if ($(window).width() < 576 ) {
        $('#offerForm').css("width", "100vw");
        $('#plan').css("width", "85vw");
        $('#time').css("width", "85vw");
        $('#phoneInput').css("width", "85vw");
    }
    else if ($(window).width() < 768 ) {
        $('#offerForm').css("width", "90vw");
        $('#plan').css("width", "80vw");
        $('#time').css("width", "80vw");
        $('#phoneInput').css("width", "80vw");
    }
    else if ($(window).width() < 992 ) {
        $('#offerForm').css("width", "75vw");
        $('#plan').css("width", "60vw");
        $('#time').css("width", "60vw");
        $('#phoneInput').css("width", "60vw");
    }
    else {
        $('#offerForm').css("width", "50vw");
        $('#plan').css("width", "40vw");
        $('#time').css("width", "40vw");
        $('#phoneInput').css("width", "40vw");
    }
})