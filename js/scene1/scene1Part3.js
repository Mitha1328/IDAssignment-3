//part 3: Vitamin and mineral supplements cannot cure COVID-19 

$(document).ready(function () {
  
    //myth
    $(".btn-pt3-myth").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_56Jc5o.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
            Yes you are right :D Vitamin and mineral supplements cannot cure or prevent COVID-19.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-4" class="btn btn-secondary btn-sm btn-next-3" role="button">next</a></span>
          </p> 
        </div>
        
      </div>`;
      
      $("#pt3-conclusion").html(text);
      
      $(".btn-next-3").on("click", function (e) {
        $("#part-4").show();
      });
      
    });
  
    //fact
    $(".btn-pt3-fact").on("click", function (e) { 
      var text = `
      <div class="row">
        <div class="col-4">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_Ll9WVU.json" background="transparent"  speed="1"  style="width: 100%; height: 100%;" autoplay></lottie-player>
        </div>
  
        <div class="col-8">
          <p class="robot-speech" style="margin-top: 20%;">
            Sadly you are wrong D: Vitamin and mineral supplements cannot cure or prevent COVID-19.
  
            <br><br>Let's bust the next!
            
            <span><a href="#part-4" class="btn btn-secondary btn-sm btn-next-3" role="button">next</a></span>
          </p> 
        </div>
          
      </div>`;
      
      $("#pt3-conclusion").html(text);
  
      $(".btn-next-3").on("click", function (e) {
        $("#part-4").show();
      });
  
    }); 
  
  
  
  });
  