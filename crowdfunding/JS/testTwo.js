$("#upi-but").click (function() {
    main();
});

function main() {

    $("#step-one-form").css({'display':'block'});

    $("#step-two-form").css({'display':'none'});

    $("#proceed-step-two").css({'display':'none'});

    $("#proceed-step-three").css({'display':'none'});

    $("#proceed-step-four").css({'display':'none'});

    $("#proceed-for-payment").css({'display':'none'})

    $("#proceed-step-one").css({'display':'block'});

    $("#loading-alert").css({'display':'none'});

    $("#qrcode").css({'opacity':'0'});  
    

    document.getElementById("sendbut").disabled = true;

    $('#dis-one').prop('disabled', true);
    $('#dis-two').prop('disabled', true);




$("#proceed-step-one").click (function() {

    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
 
    var Helloform = $( "#main-form" );

    Helloform.validate();

    console.log(Helloform.valid());

        if ( Helloform.valid() == true )
        {

            $("#step-two-form").css({'display':'block'});
            $("#proceed-step-two").css({'display':'block'});
            $("#step-one-form").css({'display':'none'});

            $("#proceed-step-two").click (function() {

                $("#step-one-form").css({'display':'block'});
                $("#proceed-step-two").css({'display':'block'});    
                
                document.getElementById("sendbut").disabled = false;
            
                $("#proceed-step-two").css({'display':'none'});
                $("#proceed-step-three").css({'display':'block'});

                $("#edit-money").css({'display':'none'});
                
            });

            $("#proceed-step-three").click (function() {
                $("#proceed-step-three").css({'display':'none'});  
                $("#proceed-step-one").css({'display':'none'});
                
                $('#dis-one').prop('disabled', false);
                $('#dis-two').prop('disabled', false);

                
                
                $("#sendbut").click()
                document.getElementById("sendbut").disabled = true;
                $("#step-one-form").css({'display':'none'});
                $("#step-two-form").css({'display':'none'});

                  
            });


        }
        else{
            // alert( "Valid: " + Helloform.valid() );
        }
    
});

};