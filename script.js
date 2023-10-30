function togglePassword() { 
     var x = document.getElementById("passwordInput");
     if (x.type === "password") {  x.type = "text";} 
       else {  x.type = "password";
  }}
    $(document).ready(function () {  $('#myCheckbox').change(function () {
       if ($(this).is(':checked')) {      $('#submitBtn').prop('disabled', false);}
        else {      $('#submitBtn').prop('disabled', true);
    }  });
});
function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');}
function setBackground() {
    $('body').css('background-image', 'url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg")');} 
    $(document).ready(function () {
    $('#myTextarea').keyup(function () {    var charLength = $(this).val().length;
    $('#charCount').text(charLength);    if (charLength > 100) {
      $(this).val($(this).val().substring(0, 100));    }
  });});
  $(document).ready(function(){
    $("button").click(function(){
      var fadeTime = 1000; 
      var targetOpacity = 0.5; 
      $("#myParagraph").animate({ opacity: targetOpacity }, fadeTime);
    });
  });
  
  $(document).ready(function(){
    $("#btn1").click(function(){
      $("#box").animate({
        height: '300px',
        width: '300px'
      });
    });
    
      $("#btn2").click(function(){
        $("#box").animate({
          height: '100px',
          width: '100px'
        });
      });
    });