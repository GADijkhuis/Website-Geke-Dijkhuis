
var captcha_checkbox_checked = false;

var attempts = 0;

function check_captcha() {
    var captcha_inner = document.getElementById("captcha-inner-check");

    var captcha_inner_text = document.getElementById("captcha-inner-text");
    
    var captcha_checkbox = document.getElementById("captcha-checkbox");
    
    if (!captcha_checkbox_checked && attempts != 5) {

        var random_generated_id = Math.floor((Math.random() * 10000) + 1);

        captcha_inner_text.innerHTML = "Robot code: " + random_generated_id;

        captcha_inner_text.style.top = 0;
        captcha_inner_text.style.paddingBottom = 0;

        setTimeout(function () {
            let captcha_check_id = prompt('Voer robot code in:');

            if (captcha_check_id == random_generated_id) {
                captcha_inner.innerHTML = "<span class='material-symbols-outlined cabt' style='-webkit-user-select: none; -ms-user-select: none; user-select: none; '>done</span>";


                captcha_inner_text.innerHTML = "U bent geen robot.";
                captcha_checkbox.setAttribute("checked", "true");
                captcha_checkbox_checked = true;
            }
            else {
                attempts++;

                captcha_inner_text.innerHTML = "Robot code onjuist. Nog " + (5 - attempts) + " pogingen.";
            }
        }, 1000);

    } else if (attempts == 5) {
        alert("Er zijn 5 pogingen geweest. Laad de pagina opnieuw om nog een keer te proberen.");
    }
}