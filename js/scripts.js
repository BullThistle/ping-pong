function populate(intIn){
  var arrOut = [];
  for(var i = 0; i < intIn; i++){
    arrOut[i] = i + 1;
  }
  return arrOut;
}

function ping(arrIn){
  for(var i = 0; i < arrIn.length; i++){
    if(arrIn[i] % 3 == 0){
      arrIn[i] = "ping";
    }
  }
  return arrIn;
}

function pong(arrIn){
  for(var i = 0; i < arrIn.length; i++){
    if(arrIn[i] % 5 == 0){
      arrIn[i] = "pong";
    }
  }
  return arrIn;
}

function pingPong(intIn){
  for(var i = 0; i < arrIn.length; i++){
    if(arrIn[i] % 15 == 0){
      arrIn[i] = "pong";
    }
  }
  return arrIn;
}

$(document).ready(function() {
    
})

function clicked(event){
  event.preventDefault();
  var intIn = parseInt($("input#intIn").val());
  var result = populate(intIn);
  result = ping(result);
  result = pong(result);
  result = pingPong(result);
  console.log(result);



  $("#intOut").html(result);
};
