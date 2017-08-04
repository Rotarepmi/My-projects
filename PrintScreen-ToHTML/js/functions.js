$(document).ready(function(){

  (function numberOfStar(){
    $(".postpage .post-wrapper .post-social-media .post-rate-stars").click(function showNumber(){
      var checked = $(".postpage .post-wrapper .post-social-media .post-rate-stars input:checked");
      $("#numberOfStars").html(checked.val());
    });
  })();

});

/* Google Maps Api */

function initMap() {
  var uluru = {lat: 53.122, lng: 17.995};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


