var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
      $('.first-name-error').append('You did not enter your first name');
    }
   
 var lastName = $('#last').val();
    
    if(lastName === "") {
      $('.last-name-error').append('You did not enter your last name');
    }

 var email = $('#email').val();
    
    if(email === "") {
      $('.email-error').append('You did not enter your email');
    }
     if(email === "me@example.com") {
      $('.email-error').append('Someone already has this email. Try another.');
    }
   
 var pwd = $('#password').val();
    
    if(pwd === "") {
      $('.password-error').append('You did not enter your password');

    }
    if(pwd.length < 8){
      $('.password-error').append('Too short password. Try one with at least 8 characters.');


    }

    return false;
  });
};

$(document).ready(main);