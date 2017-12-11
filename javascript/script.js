$(document).ready(function() {
  $(".dropdown").hide();
  $(".home-back-nav").hide();
  $(".resized-copy").hide();
/* ------ WINDOW RESIZING ------ */
$(window).resize(function() {
      if ($(this).width() < 1000) {
        $('#rslider').hide();
        $('.home-back-nav').show();    
      } else {
        $('#rslider').show();
        $('.home-back-nav').hide();
        }
    });
$(window).resize(function() {
          if ($(this).width() < 700) {
            $('#social-media').hide();
            $('.dropdown').show();
            $('.copyright').hide();
            $('.resized-copy').show();

          } else {
            $('#social-media').show();
            $('.dropdown').hide();
            $('.copyright').show();
            $('.resized-copy').hide();
            }
});
/* ----------- ORDER DROP DOWN MENU ----------*/
  /* --- PIZZA PAGE 1 BUTTON ! --- */
  $('.drop-menu1').hide();
  $('#myButton1').click(function(e) {
    e.preventDefault();
       $('.drop-menu1').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu1').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu1').hide();
      });
  /* --- PIZZA PAGE 1 BUTTON 2 --- */
      $('.drop-menu2').hide();
      $('#myButton2').click(function(e) {
        e.preventDefault();
           $('.drop-menu2').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu2').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu2').hide();
          });
          /* --- PIZZA PAGE 1 BUTTON 3 --- */
      $('.drop-menu3').hide();
      $('#myButton3').click(function(e) {
        e.preventDefault();
           $('.drop-menu3').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu3').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu3').hide();
          });
      /* --- PIZZA PAGE 2 BUTTON 1 --- */
  $('.drop-menu7').hide();
  $('#myButton7').click(function(e) {
    e.preventDefault();
       $('.drop-menu7').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu7').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu7').hide();
      });
  /* --- PIZZA PAGE 2 BUTTON 2 --- */
      $('.drop-menu8').hide();
      $('#myButton8').click(function(e) {
        e.preventDefault();
           $('.drop-menu8').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu8').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu8').hide();
          });
          /* --- PIZZA PAGE 2 BUTTON 3 --- */
      $('.drop-menu9').hide();
      $('#myButton9').click(function(e) {
        e.preventDefault();
           $('.drop-menu9').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu9').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu9').hide();
          });
      /* --- PIZZA PAGE 3 BUTTON 1 --- */
  $('.drop-menu10').hide();
  $('#myButton10').click(function(e) {
    e.preventDefault();
       $('.drop-menu10').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu1').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu10').hide();
      });
  /* --- PIZZA PAGE 2 BUTTON 2 --- */
      $('.drop-menu11').hide();
      $('#myButton11').click(function(e) {
        e.preventDefault();
           $('.drop-menu11').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu11').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu11').hide();
          });
          /* --- PIZZA PAGE 2 BUTTON 3 --- */
      $('.drop-menu12').hide();
      $('#myButton12').click(function(e) {
        e.preventDefault();
           $('.drop-menu12').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu12').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu12').hide();
          });
        /* --- PIZZA PAGE 4 BUTTON 1 --- */
  $('.drop-menu13').hide();
  $('#myButton13').click(function(e) {
    e.preventDefault();
       $('.drop-menu13').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu13').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu13').hide();
      });
  /* --- PIZZA PAGE 4 BUTTON 2 --- */
      $('.drop-menu14').hide();
      $('#myButton14').click(function(e) {
        e.preventDefault();
           $('.drop-menu14').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu14').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu14').hide();
          });
          /* --- PIZZA PAGE 4 BUTTON 3 --- */
      $('.drop-menu15').hide();
      $('#myButton15').click(function(e) {
        e.preventDefault();
           $('.drop-menu15').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu15').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu15').hide();
          });    
       /* --- PIZZA PAGE 5 BUTTON ! --- */
  $('.drop-menu16').hide();
  $('#myButton16').click(function(e) {
    e.preventDefault();
       $('.drop-menu1').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu16').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu16').hide();
      });
  /* --- PIZZA PAGE 5 BUTTON 2 --- */
      $('.drop-menu17').hide();
      $('#myButton17').click(function(e) {
        e.preventDefault();
           $('.drop-menu17').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu17').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu17').hide();
          });
          /* --- PIZZA PAGE 5 BUTTON 3 --- */
      $('.drop-menu18').hide();
      $('#myButton18').click(function(e) {
        e.preventDefault();
           $('.drop-menu18').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu18').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu18').hide();
          });
      /* --- PASTA PAGE 1 BUTTON 1 --- */
  $('.drop-menu4').hide();
  $('#myButton4').click(function(e) {
    e.preventDefault();
       $('.drop-menu4').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu4').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu4').hide();
      });
  /* --- PASTA PAGE 1 BUTTON 2 --- */
      $('.drop-menu5').hide();
      $('#myButton5').click(function(e) {
        e.preventDefault();
           $('.drop-menu5').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu5').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu5').hide();
          });
          /* --- PASTA PAGE 1 BUTTON 3 --- */
      $('.drop-menu6').hide();
      $('#myButton6').click(function(e) {
        e.preventDefault();
           $('.drop-menu6').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu6').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu6').hide();
          });
           /* --- DESSERTS PAGE 1 BUTTON 1 --- */
  $('.drop-menu24').hide();
  $('#myButton24').click(function(e) {
    e.preventDefault();
       $('.drop-menu24').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu24').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu24').hide();
      });
  /* --- DESSERTS PAGE 1 BUTTON 2 --- */
      $('.drop-menu25').hide();
      $('#myButton25').click(function(e) {
        e.preventDefault();
           $('.drop-menu25').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu25').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu25').hide();
          });
          /* --- DESSERTS PAGE 1 BUTTON 3 --- */
      $('.drop-menu26').hide();
      $('#myButton26').click(function(e) {
        e.preventDefault();
           $('.drop-menu26').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu26').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu26').hide();
          }); 
               /* --- SALADS PAGE 1 BUTTON 3 --- */
  $('.drop-menu20').hide();
  $('#myButton20').click(function(e) {
    e.preventDefault();
       $('.drop-menu20').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu20').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu20').hide();
      });
  /* --- SALADS PAGE 1 BUTTON 1 --- */
      $('.drop-menu18').hide();
      $('#myButton18').click(function(e) {
        e.preventDefault();
           $('.drop-menu18').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu18').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu18').hide();
          });
          /* --- SALADS PAGE 1 BUTTON 2 --- */
      $('.drop-men19').hide();
      $('#myButton19').click(function(e) {
        e.preventDefault();
           $('.drop-menu19').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu19').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu19').hide();
          });
                   /* --- SALADS PAGE 1 BUTTON 3 --- */
  $('.drop-menu23').hide();
  $('#myButton23').click(function(e) {
    e.preventDefault();
       $('.drop-menu23').show();
   });
  var mouse_is_inside = false;
      $('.drop-menu23').hover(function(){ 
          mouse_is_inside=true; 
      }, function(){ 
          mouse_is_inside=false; 
      });
      $("body").mouseup(function(){ 
          if(! mouse_is_inside) $('.drop-menu23').hide();
      });
  /* --- SALADS PAGE 1 BUTTON 1 --- */
      $('.drop-menu').hide();
      $('#myButton21').click(function(e) {
        e.preventDefault();
           $('.drop-menu21').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu21').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu21').hide();
          });
          /* --- SALADS PAGE 1 BUTTON 2 --- */
      $('.drop-men22').hide();
      $('#myButton22').click(function(e) {
        e.preventDefault();
           $('.drop-menu22').show();
       });
      var mouse_is_inside = false;
          $('.drop-menu22').hover(function(){ 
              mouse_is_inside=true; 
          }, function(){ 
              mouse_is_inside=false; 
          });
          $("body").mouseup(function(){ 
              if(! mouse_is_inside) $('.drop-menu22').hide();
          });                       
});
