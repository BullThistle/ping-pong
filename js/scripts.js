



$(document).ready(function() {
    
})

function clicked(event){
  event.preventDefault();
  var intIn = parseInt($("input#intIn").val());
  var result = populate(intIn);
  result = ping(result);
  result = pong(result);
  result = pingPong(result);



  $("#intOut").html(result);
};
