//part 4-2: (choice 1) should mary go see the doctor or stay home?

$(document).ready(function () {
  $("#part-5").hide();
  
    // Make yourself a meter apart from the person standing in front of you
    $(".btn-pt4-move").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_9FzSEE.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech">
              Peter decided to Make himself a meter apart from the person standing in front of him
  
              <span><a href="#pt4-conclusion" class="btn btn-secondary btn-sm btn-pt4-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt4-consequence").html(text);
  
      $(".btn-pt4-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt4-conclusion").html(text2);
        $("#part-5").show();
      });
  
  
    });
  
    //Que up close to one another.
    $(".btn-pt4-close").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_WdTEui.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech" style="margin-top: 20%;">
              Peter decided to Move Closer
  
              <span><a href="#pt4-conclusion" class="btn btn-secondary btn-sm btn-pt4-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt4-consequence").html(text);
  
      $(".btn-pt4-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt4-conclusion").html(text2);
        $("#part-5").show();
      });
    });
  });