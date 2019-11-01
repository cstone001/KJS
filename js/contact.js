/*RADIO TEXT Validation*/
function ValidateForm(form){
  ErrorText= "";
  if ( ( contactForm.event[0].checked == false ) && ( contactForm.event[1].checked == false ) )
  { document.getElementById('error').innerHTML="Please choose an event type: Hosting or Acting";
    return false;
  }
  if (ErrorText= "") { contactForm.submit() }
}

function radioTextFunction() {
  document.getElementById("error").style.display="none";
}


/*DATE VALIDATION(future dates only)*/
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("eventDate")[0].setAttribute('min', today);


$(document).ready(function() {
    $('#form')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              eventName: {
                  validators: {
                      notEmpty: {
                          message: 'The event name is required'
                      },
                      stringLength: {
                          min: 3,
                          max: 45,
                          message: 'The event name must be more than 2 and less than 45 characters long'
                      },
                      regexp: {
                          regexp: /^[a-zA-Z0-9_ \.]+$/,
                          message: 'The event name can only consist of alphanumerical characters'
                      }
                  }
              },
              eventDate: {
                  validators: {
                      notEmpty: {
                          message: 'The event date is required'
                      },
                      date: {
                          format: 'MM/DD/YYYY',
                          message: 'The value is not a valid date'
                      }
                  }
              },
              eventTime: {
                  validators: {
                      notEmpty: {
                          message: 'The event time is required'
                      }
                  }
              },
              firstName: {
                  row: '.col-xs-4',
                  validators: {
                      notEmpty: {
                          message: 'The first name is required'
                      },
                      stringLength: {
                          min: 2,
                          max: 15,
                          message: 'The first name must be more than 1 and less than 16 characters long'
                      },
                      regexp: {
                          regexp: /^([a-zA-Z\s]{2,15})$/,
                          message: 'The first name can only consist of alphabetical characters'
                      }
                  }
              },
              lastName: {
                  row: '.col-xs-4',
                  validators: {
                      notEmpty: {
                          message: 'The last name is required'
                      },
                      stringLength: {
                          min: 2,
                          max: 15,
                          message: 'The name must be more than 1 and less than 16 characters long'
                      },
                      regexp: {
                          regexp: /^([a-zA-Z\s]{2,15})$/,
                          message: 'The name can only consist of alphabetical characters'
                      }
                  }
              },
              contactNumber: {
                  validators: {
                      notEmpty: {
                          message: 'The phone number is required'
                      },
                      stringLength: {
                          min: 10,
                          max: 14,
                          message: 'The phone number must be atleast 10 and less than 15 characters long'
                      },
                      regexp: {
                          message: 'The phone number can only contain the digits, spaces, -, (, ), + and .',
                          regexp: /^[0-9\s\-()+\.]+$/
                      }
                  }
              },
              email: {
                  validators: {
                      notEmpty: {
                          message: 'The email address is required'
                      },
                      emailAddress: {
                          message: 'The input is not a valid email address'
                      }
                  }
              },
              message: {
                  validators: {
                      notEmpty: {
                          message: 'The message is required'
                      },
                      stringLength: {
                          max: 700,
                          message: 'The message must be less than 700 characters long'
                      }
                  }
              }
            }
        })
});
