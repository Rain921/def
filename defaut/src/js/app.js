$(document).ready(function() {
	var href=$(".lang div");
href.click(function () {
    var scrollId = $(this).attr("href");
    change_active($(this));
    //scroll_if_anchor(scrollId);
    return false;
});

function change_active(current) {
    console.log(href);
    href.removeClass("active-lang");
    current.addClass("active-lang");
}

});
// Маска ввода номера телефона
$(function($){
	$('[name="phone"]').mask("+3(999) 999-9999");
});
//form
$(document).ready(function() {
  $('form').submit(function(e) {
      e.preventDefault();
if (document.form.name.value == '' || document.form.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
     $('.thanks-overlay').fadeIn();
     $('html').toggleClass('overflow');
      $(this).find('input').val('');
      $('form').trigger('reset');
       UIkit.modal('#modal-container').hide();
      var timerId =  setTimeout(function() {
    $(".thanks-overlay").fadeOut();
    $('html').removeClass('overflow');
    UIkit.modal('#modal-container').hide();
    },3000);
      // Закрыть попап «спасибо»
       $('.out').click(function() { 
  	clearTimeout(timerId);
  $('.thanks-overlay').fadeOut();
  UIkit.modal('#modal-container').hide();
   $('html').removeClass('overflow');
	});
    });
    return false;
  });
  
});

//form2
$(document).ready(function() {
  $('.form2').submit(function(e) {
      e.preventDefault();
if (document.form2.name.value == '' || document.form2.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
     $('.thanks-overlay').fadeIn();
     $('html').toggleClass('overflow');
      $(this).find('input').val('');
      $('.form2').trigger('reset');
       setTimeout(function() {
    $(".thanks-overlay").fadeOut();
    $('html').removeClass('overflow');
    },3000);
    });
    return false;
  });
  
});

