$(document).ready(function(){

  $(".btn-group").hide();

  //enable popovers
  $(function () {
    $('[data-toggle="popover"]').popover()
  });
  
  //carousel interval
  $('.carousel').carousel({

  interval: 3000

  });



  

//show search results

//hide body div


  $("#searchbtn").on("click", function(){
    alert("hi");
    $('#bodydiv').removeAttr(hidden);


  });

  // $("input").on('click', function() {
  //   alert("ye");
    // var text = $(this).html();
    // $(".dropdown-menu ul li").html(text);
    // $(".dropdown-menu").hide();
  // });

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
    $(".btn-group").fadeToggle();
  });

});