$(document).ready(function(){

  $(".btn-group2").hide();
  $(".listing").hide();
  $(".alert").hide();

  //enable popovers
  $(function () {
    $('[data-toggle="popover"]').popover()
  });
  
  //carousel interval
  $('.carousel').carousel({
    interval: 3000
  });

  //show search results 
    
  $("#btnsearch").on("click", function(e){
    e.preventDefault();
    debugger
    $(".listing").hide();
    amenResult();
    var city = $("#city").val();
    if (city === ""){
      $(".alert").show();
      return;
    } else if (city === "London"){
      $(".listing.ld").show();
    }else if (city === "Paris"){
      $(".listing.pa").show();
    }else if (city === "Tokyo"){
      $(".listing.tk").show();
    }else if (city === "New York City"){
      $(".listing.ny").show();
    }else if (city === "Hong Kong"){
      $(".listing.hk").show();
    }
  });

  $(".freebies input").on("click", function(){
    var free = $(".freebies input");

    if(this.className != "clicked"){
    free.addClass("clicked");
    } else {
      free.removeClass("clicked")
    }
  });

  //amenity result
  function amenResult () {
    var freebf = " Free Breakfast";
    var pool = "Pool";
    var freepark = "Free Parking";
    var freewifi = "Free Wifi";
    var laundry = "Laundry";
    var spa = "Spa";

    
    if ($("#op1").hasClass("clicked")){    
      $(".amenities").append(freebf + " ");
    }debugger
    // else if ($("#op2").hasClass("clicked")){      
    //   $(".amenities").append(pool + " ");
    // }
    // else if ($("#op3").hasClass("clicked")){   
    //   $(".amenities").append(freepark + ", ");
    // });
    // else if ($("#op4").hasClass("clicked")){     
    //   $(".amenities").append(freewifi + ", ");
    // });
    // else if ($("#op5").hasClass("clicked")){     
    //   $(".amenities").append(laundry + ", ");
    // });
    // else if ($("#op6").hasClass("clicked")){    
    //   $(".amenities").append(spa);
    // });
  };


  $('.selectpicker').selectpicker();

  $('.selectpicker').selectpicker({
      style: 'btn-info',
      size: 4
  });

  // debugger;
  $(document).on("click",".modal-footer .btn-primary", function(){
    $(this).parents("div.listing").hide();
    $('.modal').modal('hide')
  });

  //show advanced search option buttons
  $("#moreOptions").on("click", function(){
    $(".btn-group2").fadeToggle();
  });
});