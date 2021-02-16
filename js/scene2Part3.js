//part 3: story of the previous the night (why mary got sick)

$(document).ready(function () {
    //hide parts
    $(".question-pt3-2").hide();
    $(".question-pt3-3").hide();
    $(".question-pt3-4").hide();
    $(".question-pt3-5").hide();
  
    //show what mary is doing at (1) 8pm, (2) 9pm, (3) 12pm, (4) 4am, (5) 6am
  
    //(1) 8pm
    $(".btn-pt3-1").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-8">
            <p class="robot-speech" style="margin-top: 20%;">
              8pm: Mary just bought a new game! She has been waiting in line for 3 hours to get it.
            </p> 
          </div>
  
          <div class="col-4">
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_w5puR3.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
      </div>
      `;
      
      $("#text-pt3-1").html(text);
      $(".question-pt3-2").show();
  
    });
  
    //(2) 9pm
    $(".btn-pt3-2").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-8">
            <p class="robot-speech" style="margin-top: 20%;">
              8pm: Mary just bought a new game! She has been waiting in line for 3 hours to get it.
            </p> 
          </div>
  
          <div class="col-4">
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_w5puR3.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
      </div>
      `;
       
      $("#text-pt3-2").html(text);
      $(".question-pt3-3").show();
      
    });
  
    //(3) 12am
    $(".btn-pt3-3").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-8">
            <p class="robot-speech" style="margin-top: 20%;">
              8pm: Mary just bought a new game! She has been waiting in line for 3 hours to get it.
            </p> 
          </div>
  
          <div class="col-4">
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_w5puR3.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
      </div>
      `;
      
      $("#text-pt3-3").html(text);
      $(".question-pt3-4").show();
      
    });
  
    //(4) 4am
    $(".btn-pt3-4").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-8">
            <p class="robot-speech" style="margin-top: 20%;">
              8pm: Mary just bought a new game! She has been waiting in line for 3 hours to get it.
            </p> 
          </div>
  
          <div class="col-4">
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_w5puR3.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
      </div>
      `;
      
      $("#text-pt3-4").html(text);
      $(".question-pt3-5").show();
  
    });
  
    //(5) 6am
    $(".btn-pt3-5").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-8">
            <p class="robot-speech" style="margin-top: 20%;">
              8pm: Mary just bought a new game! She has been waiting in line for 3 hours to get it.
            </p> 
          </div>
  
          <div class="col-4">
            <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_w5puR3.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
      </div>
      `;
      
      $("#text-pt3-5").html(text);
      $("#btn-pt3-conclusion").show();
      
    });
  
  
  });
  