/* Networks Landing Scripts
Made by Alex Komlev & Aqualabs, 2019.
This document is sharing under the MIT License. */

jQuery(document).ready(function($) {

    var specmail = $('#specialEmail').val();
    var simplePhone = $('#inputPhone').val();

    $('#specialEmail').on('change', function () {
        specmail = $('#specialEmail').val();
        console.log(specmail);
    })

    var price = $('#inputGroupSelect01 option:selected').data('price');
    var period = $('#inputGroupSelect02 option:selected').val();

    /* Offer Form Calculation */

    $('.btn.ofb').on('click', function(){
        var tarif = $('.btn.ofb').parent().parent().find('.nameTarif').text();
        $('#inputGroupSelect01 option').each(function(){
            if($('#inputGroupSelect01 option:selected').val() == tarif) {
                $(this).prop('selected', true);
            }
        })
        $('#offerForm').show();
        $('#offerForm').css("display", "flex");
        if ($(window).width() < 768 ) {
            $('#inputGroupSelect02, #inputGroupSelect01').on('change', function(){
                var price = $('#inputGroupSelect01 option:selected').data('price');
                var period = $('#inputGroupSelect02 option:selected').val();
                $('.pricement').text('Итог: '+price * period+'€');
            })
        }
        else {
            $('#inputGroupSelect02, #inputGroupSelect01').on('click', function(){
                var price = $('#inputGroupSelect01 option:selected').data('price');
                var period = $('#inputGroupSelect02 option:selected').val();
                $('.pricement').text('Итог: '+price * period+'€');
            })
        }
    })
    $('.close').on('click', function(){
        $('#offerForm').hide();
        $('#offerForm').css("display", "none");
        $('#specialForm').hide();
        $('#specialForm').css("display", "none");
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

        var trf=$('#inputGroupSelect01 option:selected').val();
        var period=$('#inputGroupSelect02 option:selected').val();
        var inputPhone=$('#inputPhone').val();
        var specialEmail=$('#specialEmail').val();

        sendout(trf,period,inputPhone,specialEmail);

        function sendout(trf, period, inputPhone, specialEmail) {
            var z=$.ajax({
                type: "POST",
                url: "handler.php/",
                data: {trf:trf, period:period, inputPhone:inputPhone, specialEmail:specialEmail},
            });
        };
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
    $('#button-addon2').on('click', function() {
        $('#specialForm').show();
        $('#specialForm').css("display", "flex");
        var trf=$('#inputGroupSelect01 option:selected').val();
        var period=$('#inputGroupSelect02 option:selected').val();
        var inputPhone=$('#inputPhone').val();
        var specialEmail=$('#specialEmail').val();

        sendout(trf,period,inputPhone,specialEmail);

        function sendout(trf, period, specialEmail) {
            var z=$.ajax({
                type: "POST",
                url: "handler.php/",
                data: {trf:trf, period:period, inputPhone:inputPhone, specialEmail:specialEmail},
            });
        };
    });
});