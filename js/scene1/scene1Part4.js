//part 4: Water or swimming does not transmit the COVID-19 virus

$(document).ready(function () {
  
    //myth
    $(".btn-pt4-myth").on("click", function (e) { 
      var text = `
      <!-- (2) did you know? talk about how the virus is transmitted -->
      <div class="row">
        <div class="col-12">
          <p class="robot-speech-facts" style="margin-top: 20%;">
            SO HOW IS COVID-19 TRANSMITTED? <br><br>
            The virus is transmitted through droplets from an infected person cough, sneeze, or exhale. <br><br>
            You can be infected by breathing in the virus if you are close to someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets6.lottiefiles.com/temp/lf20_VSSRJT.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-correct" style="margin-top: 20%;">
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
      <!-- (2) did you know? talk about how the virus is transmitted -->
      <div class="row">
        <div class="col-12">
          <p class="robot-speech-facts" style="margin-top: 20%;">
            SO HOW IS COVID-19 TRANSMITTED? <br><br>
            The virus is transmitted through droplets from an infected person cough, sneeze, or exhale. <br><br>
            You can be infected by breathing in the virus if you are close to someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.
          </p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets6.lottiefiles.com/temp/lf20_VSSRJT.json" background="transparent"  speed="1"  style="width: 100%; height: 100%;" autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech-wrong" style="margin-top: 20%;">
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
  