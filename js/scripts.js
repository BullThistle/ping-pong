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

function pingPong(arrIn){
  for(var i = 0; i < arrIn.length; i++){
    if(arrIn[i] % 15 == 0){
      arrIn[i] = "pingpong";
    }
  }
  return arrIn;
}

function outputPingPong(arrIn){
  for (i = 0; i < arrIn.length; i++ ) {
      arrIn[i] += "<br>";

  }
  return arrIn;
}

function clicked(event){
  event.preventDefault();
  var intIn = parseInt($("input#intIn").val());
  var result = populate(intIn);
  result = pingPong(result);
  result = pong(result);
  result = ping(result);
  result = outputPingPong(result);
  $("#intOut").html(result);
};
