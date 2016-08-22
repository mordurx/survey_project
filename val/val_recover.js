// Wait for the DOM to be ready
$(function() {
    $("#message").hide();
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='idForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      email: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      email: {
        required: "Please provide a password",
        email: "Please enter a valid email address"
      },
         },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      dataString={"email": $('#email').val()};
      $.ajax({
                type: "POST",
                url:"php/recover.php",
                data: dataString,
                success: function(data){
                    var data = JSON.parse(data);
                    //si el resultado es exitoso hide the form , else email no se encuentra
                    $("form[name='idForm']").hide();
                    var ref="../index.html";
                    document.getElementById('message').innerHTML ="<form action='index.html'><h1>"+data+"</h1><button type='submit' class='button button-block'/>Get Started</button></form>";
                    //$("#message").html(data);
                    $("#message").show();
                    //$("#message").fadeOut(3000);
                    
                }
            });
    
    }
  });
});

