$(document).ready(function () {
    //hide parts to be shown only when button is clicked
    $("#part-2").hide();
    $("#part-3").hide();
    $("#part-4").hide();
    $("#part-5").hide();
  
    // "btn-next-1" will go to "part-2" ...
    //event listener for button
    $(".btn-next-1").on("click", function (e) {
        $("#part-2").show();
  
    });
  
    $(".btn-next-2").on("click", function (e) {
        $(".time-travel-anim").html(`
        <lottie-player src="https://assets5.lottiefiles.com/temp/lf20_kDSNzl.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay loop></lottie-player>`);
  
        $("#part-3").show();
      
    });
  
    $(".btn-next-3").on("click", function (e) {
        $("#part-4").show();
      
    });

    $(".btn-next-4").on("click", function (e) {
        ("#part-5").show();
  
    });
});