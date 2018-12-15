$(document).ready(function() {
    disableFormIfInvalid();
    addListeners();
});

function addListeners() {
    checkFields($("#user_username"), user_validation);       // function as param
    checkFields($("#user_email"), email_validation);
    checkFields($("#user_pass"), password_validation);
    checkPasswordsLive($("#user_pass"), $("#user_pass_confirmation"));
}

function checkFields(input, validation) {
    input
    .on("keypress", function (event) {
        var charpressed = String.fromCharCode(event.charCode || event.keyCode);
        validation(input.val() + charpressed);
    })
    .on("keydown", function (event) {
        var keypressed = event.charCode || event.keyCode;
        
        if (keypressed == 8 && event.ctrlKey) {
            validation("");
        } else if (keypressed == 8) {      // del button
            var string = input.val();
            validation(string.substring(0, string.length-1));
        }
    });
}

function user_validation(field) {
    var userPatternHelper = "<p id='userTooltip'>";
    userPatternHelper += "<strong>Only characters/numbers</strong><br>At least ";
    userPatternHelper += (field.length > 5) ? "6 ✓" : "6 <span style='opacity:0;'>✓</span>";
    userPatternHelper += "</p>";

    $('[data-toggle="username"]')
    .attr('data-original-title', userPatternHelper)
    .tooltip("enable")
    .tooltip("show");
}

function password_validation(field) {
    var passwordPatternHelper = "<p id='passwordTooltip'>";
    passwordPatternHelper += "<strong>Must contain at least:</strong><br>";
    
    passwordPatternHelper += (field.length > 5) ? "6 characters ✓" : "6 characters";
    passwordPatternHelper += "<br>";
    passwordPatternHelper += field.match(new RegExp("[A-Z]+", "g")) ? "1 uppercase ✓" : "1 uppercase";
    passwordPatternHelper += "<br>";
    passwordPatternHelper += field.match(new RegExp("[a-z]+", "g")) ? "1 lowercase ✓" : "1 lowercase";
    passwordPatternHelper += "<br>";
    passwordPatternHelper += field.match(new RegExp("\\d+", "g")) ? "1 number ✓" : "1 number";
    passwordPatternHelper += "<br>";
    passwordPatternHelper += field.match(new RegExp("[!@#$%^&*\\-_:\"\'/()]+", "g")) ? "1 special character ✓" : "1 special character";
    
    passwordPatternHelper += "</p>";

    $('[data-toggle="password"]')
    .attr('data-original-title', passwordPatternHelper)
    .tooltip("enable")
    .tooltip("show");
}

function email_validation(field) {
    var pattern = '^(([^<>()\\[\\].,;:\\s@"\']+(\\.[^<>()\\[\\].,;:\s@"\']+)*)|("\\.+"))@(([0-9]{1,3}(\\.[0-9]{1,3}){3})|(([a-zA-Z\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    
    if (field.match(new RegExp(pattern, "g"))) {
        $('[data-toggle="email"]')
        .tooltip("disable")
        .tooltip("hide");
        $("#lastGroup").removeClass("has-mail-error");
    } else {
        $('[data-toggle="email"]')
        .tooltip("enable")
        .tooltip("show");
        $("#lastGroup").addClass("has-mail-error");
    }
}


function disableFormIfInvalid() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    window.addEventListener(
        "load",
        function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
}

function checkPasswordsLive(pass1, pass2) {
    $('[data-toggle="tooltip"]')
        .tooltip("disable")
        .tooltip("hide");

    var typingTimer; // timer identifier
    var doneTypingInterval = 500; // time in ms

    pass2
        .on("keyup", function() {
            // keyup, start the countdown
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        })
        .on("keydown", function() {
            // keydown, clear the countdown
            clearTimeout(typingTimer);
        });

    function doneTyping() {
        if (pass1.val() != pass2.val())
            $('[data-toggle="tooltip"]')
                .tooltip("enable")
                .tooltip("show");
        else
            $('[data-toggle="tooltip"]')
                .tooltip("disable")
                .tooltip("hide");
    }
}