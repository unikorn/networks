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
        $('.flex').css("filter", "none");
        $('.flex').css("-webkit-filter", "none)");
        $('.navbar').css("filter", "none");
        $('.navbar').css("-webkit-filter", "none");
    })
    $('#paymentConfirmation').on('click', function(){
        $('#offerForm').hide();
        $('#offerForm').css("display", "none");
        $('.alert').show();
        $('.flex').css("filter", "none");
        $('.flex').css("-webkit-filter", "none)");
        $('.navbar').css("filter", "none");
        $('.navbar').css("-webkit-filter", "none");
    })
    $('#paymentCancel').on('click', function(){
        $('#offerForm').hide();
        $('#offerForm').css("display", "none");
        $('.flex').css("filter", "none");
        $('.flex').css("-webkit-filter", "none)");
        $('.navbar').css("filter", "none");
        $('.navbar').css("-webkit-filter", "none");
    })

    /* Repeatable Alert */

    $(function() {
        $('[data-hide]').on('click', function() {
            $("." + $(this).attr('data-hide')).hide();
        })
    })
    $('.ofb').on('click', function() {
        $('.flex').css("filter", "blur(7px)");
        $('.flex').css("-webkit-filter", "blur(7px)");
        $('.navbar').css("filter", "blur(7px)");
        $('.navbar').css("-webkit-filter", "blur(7px)");
    });
});