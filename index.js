// ========= Register Form - name(characters only), email(pattern), password(length) =========
$(function () {
  $("#fname_error_message").hide();
  $("#sname_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();

  var error_fname = false;
  var error_sname = false;
  var error_email = false;
  var error_password = false;
  var error_retype_password = false;

  $("#form_fname").focusout(function () {
    check_fname();
  });
  $("#form_sname").focusout(function () {
    check_sname();
  });
  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  $("#form_retype_password").focusout(function () {
    check_retype_password();
  });

  function check_fname() {
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("#form_fname").val();
    if (pattern.test(fname) && fname !== "") {
      $("#fname_error_message").hide();
      $("#form_fname").css("border-bottom", "2px solid #34F458");
    } else {
      $("#fname_error_message").html("Should contain only characters");
      $("#fname_error_message").show();
      $("#form_fname").css("border-bottom", "2px solid #F90A0A");
      error_fname = true;
    }
  }

  function check_sname() {
    var pattern = /^[a-zA-Z]*$/;
    var sname = $("#form_sname").val();
    if (pattern.test(sname) && sname !== "") {
      $("#sname_error_message").hide();
      $("#form_sname").css("border-bottom", "2px solid #34F458");
    } else {
      $("#sname_error_message").html("Should contain only characters");
      $("#sname_error_message").show();
      $("#form_sname").css("border-bottom", "2px solid #F90A0A");
      error_fname = true;
    }
  }

  function check_password() {
    var password_length = $("#form_password").val().length;
    if (password_length < 8) {
      $("#password_error_message").html("At least 8 characters");
      $("#password_error_message").show();
      $("#form_password").css("border-bottom", "2px solid #F90A0A");
      error_password = true;
    } else {
      $("#password_error_message").hide();
      $("#form_password").css("border-bottom", "2px solid #34F458");
    }
  }

  function check_retype_password() {
    var password = $("#form_password").val();
    var retype_password = $("#form_retype_password").val();
    if (password !== retype_password || retype_password === "") {
      $("#retype_password_error_message").html("Password did not match");
      $("#retype_password_error_message").show();
      $("#form_retype_password").css("border-bottom", "2px solid #F90A0A");
      error_retype_password = true;
    } else {
      $("#retype_password_error_message").hide();
      $("#form_retype_password").css("border-bottom", "2px solid #34F458");
    }
  }

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
      $("#form_email").css("border-bottom", "2px solid #34F458");
    } else {
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      $("#form_email").css("border-bottom", "2px solid #F90A0A");
      error_email = true;
    }
  }

  $("#registration_form").submit(function () {
    error_fname = false;
    error_sname = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;

    check_fname();
    check_sname();
    check_email();
    check_password();
    check_retype_password();

    if (
      error_fname === false &&
      error_sname === false &&
      error_email === false &&
      error_password === false &&
      error_retype_password === false
    ) {
      alert("Registration Successful");
      return true;
    } else {
      alert("Please fill the form correctly");
      return false;
    }
  });
});

// ========= Scroll up - down =========
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html , body").animate({ scrollTop: 0 }, 900);
  });
});

// ========= image - sliders =========
var images = [{ src: "./Images/image1.jpg" }];

// next picture
$(document).ready(function () {
  $(".next").on("click", function () {
    var currentImg = $(".active");
    var firstImg = $(".first-img");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
    if (!nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg = firstImg;
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  // previous picture
  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var lastImg = $(".last-img");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
    if (!prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg = lastImg;
      prevImg.addClass("active").css("z-index", 10);
    }
  });
});
