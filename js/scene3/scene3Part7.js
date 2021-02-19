//part 7: Disposal of used tissue immediately

$(document).ready(function () {
    //hide parts
    $("#text-pt6-conclusion").hide();
    $("#part-7-2").hide();
    
    //Avoid contact with others 
  
    //Avoid contact with others
    $(".btn-pt7-1").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-8">
            <p class="robot-speech" style="margin-top: 20%;">
            Peter just saw a Pigeon infront of him
            </p> 
          </div>
  
          <div class="col-4">
            <lottie-player src="https://assets7.lottiefiles.com/temp/lf20_lTIFjv.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"   loop autoplay></lottie-player>
          </div>
      </div>
      `;
      
      $("#text-pt7-1").html(text);
      $("#part-7-2").show();
  
    });
});