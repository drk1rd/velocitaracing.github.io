var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("text");
  
//   if (!elText.value) {
//     alert("Input a text");
//     elText.focus();
//     return;
//   }
  
  qrcode.makeCode(elText.value);
}

makeCode();

$("#get-qr").
  on("click", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });

$("#get-qr").click (function() {  
    $("#qrcode").css({'opacity':'1'});  
});


// var qrcode = new QRCode("qrcode");

// function makeCode () {    
//   var elText = document.getElementById("text");
  
//   if (!elText.value) {
//     alert("Input a text");
//     elText.focus();
//     return;
//   }
  
//   qrcode.makeCode(elText.value);
// }

// makeCode();

// $("#text").
//   on("blur", function () {
//     makeCode();
//   }).
//   on("keydown", function (e) {
//     if (e.keyCode == 13) {
//       makeCode();
//     }
//   });


// // // $("#new-pay").click = function() {
// //     // reloadPay();
    
// //     // jQuery.validator.setDefaults({
// //     //     debug: true,
// //     //     success: "valid"
// //     // });
    
// //     // // $('selectedTextarea').attr('placeholder', 'Placeholder text');
    
// //     // document.getElementById("sendbut").disabled = true;
    
// //     // $("#proceed-step-two").css({'display':'none'});
    
// //     // $("#proceed-step-three").css({'display':'none'});
    
    
    
// //     // $("#proceed-for-payment").css({'display':'none'});
    
// //     // $("#step-two-form").css({'display':'none'});
    
// //     // $("#sendbut").css({'display' : 'none'});

// //     // mainForm.style.display = 'block'

// //     // $("#proceed-payment").css({'display':'block'});
// //     // var Helloform = $( "#main-form" );
// //     // Helloform.validate();
    
// //     // $( "#proceed-payment" ).click(function() {
// //     //   alert( "Valid: " + Helloform.valid() );
// //     // })
// // // };

// // // $("#upi-but").click = function() {
// // //     // pay();
// // //     // $("#upi-but").reload( forceGet )
// // // };










// // // var proceed = document.querySelector("#proceed-payment");
// // // var mainForm = document.querySelector("#main-form");

// // jQuery.validator.setDefaults({
// //     debug: true,
// //     success: "valid"
// // });

// // // $('selectedTextarea').attr('placeholder', 'Placeholder text');

// // document.getElementById("sendbut").disabled = true;

// // $("#proceed-step-two").css({'display':'none'});

// // $("#proceed-step-three").css({'display':'none'});

// // $("#new-pay-link").css({'display':'none'});

// // $("#link-expired").css({'display':'none'});

// // $("#proceed-for-payment").css({'display':'none'});

// // $("#step-two-form").css({'display':'none'});

// // $("#sendbut").css({'display' : 'none'});
// // // var Helloform = $( "#main-form" );
// // // Helloform.validate();

// // // $( "#proceed-payment" ).click(function() {
// // //   alert( "Valid: " + Helloform.valid() );
// // // });
// // var mainForm = document.querySelector("#step-one-form");

// // $("#proceed-payment").click (function () {

    
// //         // mainForm.style.display = 'none'
// //         var Helloform = $( "#main-form" );
    
// //         Helloform.validate();

// //         // console.log(Helloform.validate())
// //         console.log(Helloform.valid());

// //         if ( Helloform.valid() == true )
// //         {
            
// //             console.log(Helloform.valid());
// //             // document.getElementById("sendbut").disabled = true;

            

// //             setTimeout(function(){
// //                 // $("#sendbut").click()
// //             }, 100);

// //             setTimeout(function(){
// //                 mainForm.style.display = 'none'
// //                 $("#proceed-payment").css({'display':'none'});
// //             }, 101);

// //             setTimeout(function(){
// //                 $("#pay-load-two").css({'display':'flex'});                
                
// //               }, 103);
  
// //             setTimeout(function(){
// //                 // $("#pay-load-two").css({'display':'none'});
                
// //                 $("#proceed-step-two").css({'display':'block'});
                
// //             }, 3000);

// //             setTimeout(function(){
                
// //                 $("#pay-load-two").css({'display':'none'});
                
// //             }, 3001);

// //             setTimeout(function(){
                
// //                 $("#step-two-form").css({'display':'block'});
                
// //             }, 3002);
           
// //             setTimeout(function(){
// //                 // document.getElementById("sendbut").disabled = true;
// //                 $("#proceed-step-two").click(function(){
                        
// //                         $("#sendbut").css({'display' : 'none'});
// //                         document.getElementById("sendbut").disabled = false;

// //                         setTimeout(function(){
// //                             $('#dis-one').prop('disabled', false);
// //                             $('#dis-two').prop('disabled', false);
// //                             $("#sendbut").click()
// //                             $("#sendbut").css({'display':'none'});
// //                         }, 100);

// //                         setTimeout(function(){
                
// //                             $("#step-two-form").css({'display':'none'});
// //                             $("#proceed-step-two").css({'display':'none'});
                            
// //                         }, 101);


// //                         setTimeout(function(){
                
// //                             $("#proceed-step-three").click(function(){
// //                                 $("#proceed-step-three").css({'display':'none'});
// //                                 setTimeout(function(){
                                    
// //                                     $("#pay-load-two").css({'display':'flex'});
                                    
// //                                 }, 100);
// //                             });

// //                             $("#proceed-step-three").click(function(){
// //                                 setTimeout(function(){
// //                                     $("#pay-load-two").css({'display':'none'});
// //                                     $("#proceed-for-payment").css({'display':'none'});
// //                                     $("#link-expired").css({'display':'block'});
// //                                     $("#new-pay-link").css({'display':'block'});
                                    
// //                                 }, 2000);
// //                             });
// //                         }, );

            
                            
// //                   });

                  
// //                 }, 

                
// //             );

            
            
           
// //         }
        
// //         else{
          
// //                   alert( "Valid: " + Helloform.valid() );
                
// //         }

// //         // setTimeout(function(){
           
// //         //     // button.style.width = '38px'
// //         // }, 100);
        
        
// //     });


// // $("#new-pay-link").click(function(){
// //     // $("#main-form").trigger("reset");
// //     // $("#sendbut").trigger("reset");
// //     location.reload();                          
                              
// // //     $("#pay-load-two").css({'display':'flex'}); 
    
    

// // //     setTimeout(function(){
        
// // //         $("#pay-load-two").css({'display':'none'}); 
// // //         jQuery.validator.setDefaults({
// // //             debug: true,
// // //             success: "valid"
// // //         });
        
        
// // //         // $('selectedTextarea').attr('placeholder', 'Placeholder text');
        
// // //         document.getElementById("sendbut").disabled = true;
        
// // //         $("#proceed-step-two").css({'display':'none'});
        
// // //         $("#proceed-step-three").css({'display':'none'});
        
// // //         mainForm.style.display = 'block'
// // //         $("#proceed-payment").css({'display':'block'});
        
// // //         $("#proceed-for-payment").css({'display':'none'});
        
// // //         $("#step-two-form").css({'display':'none'});
// // //         $("#proceed-for-payment").css({'display':'none'});
        
// // //         $("#sendbut").css({'display' : 'none'});

        
        
// // //     }, 1500);
// // });



// // // function reloadPay(){

// // //     jQuery.validator.setDefaults({
// // //         debug: true,
// // //         success: "valid"
// // //     });
    
// // //     // $('selectedTextarea').attr('placeholder', 'Placeholder text');
    
// // //     document.getElementById("sendbut").disabled = true;
    
// // //     $("#proceed-step-two").css({'display':'none'});
    
// // //     $("#proceed-step-three").css({'display':'none'});
    
    
    
// // //     $("#proceed-for-payment").css({'display':'none'});
    
// // //     $("#step-two-form").css({'display':'none'});
    
// // //     $("#sendbut").css({'display' : 'none'});

// // //     mainForm.style.display = 'block'

// // //     $("#proceed-payment").css({'display':'block'});
// // //     // var Helloform = $( "#main-form" );
// // //     // Helloform.validate();
    
// // //     // $( "#proceed-payment" ).click(function() {
// // //     //   alert( "Valid: " + Helloform.valid() );
// // //     // })
// // // }

// // // reloadPay();