$(document).ready(function () {
    //---api for total numbers
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://covid-19-data.p.rapidapi.com/totals",
      "method": "GET",
      "headers": {
          "x-rapidapi-key": "ee93e3156cmshd871fd9954c7de3p149579jsn9b53c480eef7",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
      
    };
  
    $.ajax(settings).done(function (response) {
      //console.log(response);
  
      var confirmedInfo = "";
      var deathInfo = "";
      var recoveredInfo = "";
      var updatedInfo = "";
  
      //display total confirmed cases
      //console.log(response[0].confirmed)
  
      confirmedInfo = response[0].confirmed;
      deathInfo = response[0].deaths;
      recoveredInfo = response[0].recovered;
      updateInfo = response[0].lastUpdate;
  
  
      $(".confirmed-info").html(confirmedInfo);
      $(".death-info").html(deathInfo);
      $(".recovered-info").html(recoveredInfo);
      $(".update-info").html(updateInfo);
  
  
    });
  
  
  });//end doc