//part 7-2: Not to go near live animals, poultry and animals
$(document).ready(function () {
    

    // Make yourself a meter apart from the person standing in front of you
    $(".btn-pt7-wrong").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_FY7o8z.json"  background="transparent"  speed="0.8"  style="width: 400px; height: 400px;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech">
              Wrong
              <br>
              <strong>Wrong</strong>
  
              <span><a href="#pt7-conclusion" class="btn btn-secondary btn-sm btn-pt7-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt7-consequence").html(text);
  
      $(".btn-pt7-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt7-conclusion").html(text2);
        // $("#part-7").show();
      });
  
  
    });
  
    //Que up close to one another.
    $(".btn-pt7-correct").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_3ucc3vz0.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech" style="margin-top: 20%;">
              Peter decided to keep the Tissue
              <br>
              It is <strong>not safe</strong>
  
              <span><a href="#pt7-conclusion" class="btn btn-secondary btn-sm btn-pt7-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt7-consequence").html(text);
  
      $(".btn-pt7-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt7-conclusion").html(text2);
        // $("#part-7").show();
      });
    });
  });