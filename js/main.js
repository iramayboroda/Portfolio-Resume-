$(function(){

    $(".head_inner nav ul li.switchli a").on("click", function(e){
        $("body").toggleClass("switchMode");
        e.preventDefault();
    });
  
  });
  
  jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
  });
  
  let buttonSM = document.getElementById("sendM")
  buttonSM.addEventListener('click', function(){
    Swal.fire(
      'Good job!',
      'The message has been sent',
      'success'
    )
  })
