//part 6-2: Not to go near live animals, poultry and animals
$(document).ready(function () {
    $("#part-7").hide();

    // Make yourself a meter apart from the person standing in front of you
    $(".btn-pt6-go").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_FY7o8z.json"  background="transparent"  speed="0.8"  style="width: 400px; height: 400px;"  loop autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech">
              Peter decided to touch the pigeon
              <br>
              <strong>You should not go near Live Animals</strong>
  
              <span><a href="#pt6-conclusion" class="btn btn-secondary btn-sm btn-pt6-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt6-consequence").html(text);
  
      $(".btn-pt6-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt6-conclusion").html(text2);
        $("#part-7").show();
      });
  
  
    });
  
    //Que up close to one another.
    $(".btn-pt6-no").on("click", function (e) {
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
  
              <span><a href="#pt6-conclusion" class="btn btn-secondary btn-sm btn-pt6-conclusion" role="button">Next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt6-consequence").html(text);
  
      $(".btn-pt6-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt6-conclusion").html(text2);
        $("#part-7").show();
      });
    });
  });