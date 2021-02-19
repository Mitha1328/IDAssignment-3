//part 4: story of the previous the night (why mary got sick)

$(document).ready(function () {
    //hide parts
    $("#text-pt3-conclusion").hide();
    $("#part-4-2").hide();
  
  
    //show what mary is doing at (1) 8pm, (5) 6am
    //Avoid contact with others
  
    //Avoid contact with others
    $(".btn-pt4-1").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-8">
            <p class="robot-speech" style="margin-top: 20%;">
            Peter is queuing up to a store without any 1 meter marks
            </p> 
          </div>
  
          <div class="col-4">
            <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_ZenthI.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"   loop autoplay></lottie-player>
          </div>
      </div>
      `;
      
      $("#text-pt4-1").html(text);
      $("#part-4-2").show();
  
    });
    
   });