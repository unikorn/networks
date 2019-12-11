jQuery(document).ready(function($) {
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
});