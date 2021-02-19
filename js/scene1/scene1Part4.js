//part 4: Water or swimming does not transmit the COVID-19 virus

$(document).ready(function () {
  
    //myth
    $(".btn-pt4-myth").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_56Jc5o.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
            Yes you are right :D Water or swimming does not transmit the COVID-19 virus.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-5" class="btn btn-secondary btn-sm btn-next-4" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt4-conclusion").html(text);
  
      $(".btn-next-4").on("click", function (e) {
        $("#part-5").show();
      });
      
  
    });
  
    //fact
    $(".btn-pt4-fact").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_Ll9WVU.json" background="transparent"  speed="1"  style="width: 100%; height: 100%;" autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
            Sadly you are wrong D: Water or swimming does not transmit the COVID-19 virus.
            
            <br><br>Let's bust the next!
            
            <span><a href="#part-5" class="btn btn-secondary btn-sm btn-next-4" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt4-conclusion").html(text);
  
      $(".btn-next-4").on("click", function (e) {
        $("#part-5").show();
      });
      
  
    }); 
  
  
  
  });
  