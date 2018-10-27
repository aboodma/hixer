$(document).ready(function(){

  var forgetBtn = $("#forget");
  var registerBtn = $("#register");
  var loginForm = $("#loginForm");
  var registerForm = $("#registerForm");

  $(forgetBtn).on('click',function(){
    loginForm.fadeOut('slow');
    });


  $(registerBtn).on('click',function(){
    loginForm.fadeOut('slow');
  });

  loginForm.submit(function (event) {
    event.preventDefault();

    //Submit Start Here
    var Username = $("#Username").val();
    var Password = $("#Password").val();
    var formdata = $(loginForm).serialize();
    alert(Password);
    $.ajax({
      // Ajax Options Start Here
      type: "POST",
      url: 'Config/login.php',
      data: {Username:Username,
             Password:Password} ,
      success : function (data) {  }

      // Ajax Options End Here
    });
    //Ajax End Here

  });
  //Submit End Here

});
