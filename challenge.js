/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
let url = document.URL;
function getUsernameField(bIsMasked) {
  if(/facebook/i.test(url) || /paypal/i.test(url)){
    return $("#email");
  }else if(/instagram/i.test(url)){
    return $("input[name='username']");
  }else if(/bankofamerica/i.test(url)){
    return $("#onlineId1");
  }else if(/yahoo/i.test(url)){
    return $("#login-username");
  }else if(/citi/i.test(url)){
    if(bIsMasked){
      return $("#username"); //return original text for value display
    }else{
      return $("#usernameMasked") //return masked input for highlighting the field
    }
  }
}

function getPasswordField() {
  if(/facebook/i.test(url)){
    return $("#pass");
  }else if(/paypal/i.test(url)){
    return $('#password');
  }else if(/instagram/i.test(url) || /citi/i.test(url)){
    return $("input[name='password']");
  }else if(/bankofamerica/i.test(url)){
    return $("#passcode1");
  }else if(/yahoo/i.test(url)){
    return $("#login-passwd");
  }
}

function getFormField() {
  if(/facebook/i.test(url) || /paypal/i.test(url) || /bankofamerica/i.test(url) || /yahoo/i.test(url) || /citi/i.test(url) || /instagram/i.test(url) ){
    return getUsernameField().closest('form');
  }
}

function getSubmitButton() {
  if(/facebook/i.test(url)){
    return $("#loginbutton");
  }else if(/paypal/i.test(url)){
    return $('#btnLogin');
  }else if(/instagram/i.test(url)){
    return $("button:contains('Log in')");
  }else if(/bankofamerica/i.test(url)){
    return $("#hp-sign-in-btn");
  }else if(/yahoo/i.test(url)){
    return $("#login-signin");
  }else if(/citi/i.test(url)){
    return $("#signInBtn");
  }
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  if(/citi/i.test(url)){
    return {
      username: getUsernameField(true).val(), //pass true for boolean value "bIsMasked" to get unmasked username
      password: getPasswordField().val()
    }; 
  }
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
