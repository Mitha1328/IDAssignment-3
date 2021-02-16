//part 4: (choice 1) should mary go see the doctor or stay home?

$(document).ready(function () {
  
    //go to doctor
    $(".btn-pt4-doc").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_TAdvcC.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech" style="margin-top: 20%;">
              Mary decided to go to the doctor.
  
              <span><a href="#pt4-conclusion" class="btn btn-secondary btn-sm btn-pt4-conclusion" role="button">next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt4-consequence").html(text);
  
      $(".btn-pt4-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt4-conclusion").html(text2);
      });
  
  
    });
  
    //go to school
    $(".btn-pt4-sch").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_CrFtpW.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech" style="margin-top: 20%;">
              Mary decided to go to school.
  
              <span><a href="#pt4-conclusion" class="btn btn-secondary btn-sm btn-pt4-conclusion" role="button">next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt4-consequence").html(text);
  
      $(".btn-pt4-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt4-conclusion").html(text2);
      });
  
  
    });
  
    //stay home
    $(".btn-pt4-home").on("click", function (e) {
      var text = `
      <div class="row">
          <div class="col-12">
            <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_lnlbyoqx.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"    autoplay></lottie-player>
          </div>
  
          <div class="col-12">
            <p class="robot-speech" style="margin-top: 20%;">
              Mary decided to go to stay home.
  
              <span><a href="#pt4-conclusion" class="btn btn-secondary btn-sm btn-pt4-conclusion" role="button">next</a></span>
            </p> 
          </div>
          
      </div>
      `;
      
      $("#pt4-consequence").html(text);
  
      $(".btn-pt4-conclusion").on("click", function (j) {
        var text2 = `
        
        `;
        $("#pt4-conclusion").html(text2);
      });
  
  
    });
  
  });
  