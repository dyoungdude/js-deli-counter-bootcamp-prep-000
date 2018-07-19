var katzDeliLine = [];
function takeANumber(number, name){
  katzDeliLine.push(name);
  var number = (katzDeliLine.indexOf(name) + 1);
  return("Welcome, " + name + ". You are number " + number + " in line.");
}

function nowServing(name){
  "Currently serving " + name + "."
  if(katzDeliLine[0] === undefined){
    "There is nobody waiting to be served!"
  }
}

function currentLine(number, name){
  var number = (katzDeliLine.indexOf(name) + 1);
  for(var i = 0; i < katzDeliLine.length; i++){
    return ("The line is currently: " + number + ". " + katzDeliLine.push(name[i]) + ".");
  }
  if(katzDeliLine[0] === undefined){
    return ("The line is currently empty.");
  }
}
