$(function()
{
  $("#fname_error_message").hide();
  $("#lname_error_message").hide();
  $("#email_error_message").hide();
  $("#tel_error_message").hide();

  var error_fname = false;
  var error_lname = false;
  var error_email = false;
  var error_tel = false;

  $("#form_fname").focusout(function(){
    check_fname();
  });
  $("#form_lname").focusout(function(){
    check_lname();
  });
  $("#form_email").focusout(function(){
    check_fname();
  });
  $("#form_tel").focusout(function(){
    check_fname();
  });


  function check_fname(){
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("form_fname").val();
    if(pattern.test(fname) && fname !== ''){
      $("#fname_error_message").hide();
      $("#form_fname").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#fname_error_message").html("Should contain only Characters");
      $("#fname_error_message").show();
      $("#form_fname").css("border-bottom","2px solid #F90A0A");
      error_fname = true;
    }
  }

  function check_lname(){
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("form_lname").val();
    if(pattern.test(lname) && lname !== ''){
      $("#lname_error_message").hide();
      $("#form_lname").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#lname_error_message").html("Should contain only Characters");
      $("#lname_error_message").show();
      $("#form_lname").css("border-bottom","2px solid #F90A0A");
      error_lname = true;
    }

    function check_email(){
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email = $("form_email").val();
    if(pattern.test(email) && email !== ''){
      $("#email_error_message").hide();
      $("#form_email").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      $("#form_email").css("border-bottom","2px solid #F90A0A");
      error_email = true;

    }
    function check_tel(){
      var pattern = (\d{3})-?\s?(\d{3})-?\s?(\d{4}) ;
      var email = $("form_tel").val();
    if(pattern.test(tel) && tel !== ''){
      $("#tel_error_message").hide();
      $("#tel_email").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#tel_error_message").html("Enter valid number");
      $("#tel_error_message").show();
      $("#tel_email").css("border-bottom","2px solid #F90A0A");
      error_tel = true;

    }

})