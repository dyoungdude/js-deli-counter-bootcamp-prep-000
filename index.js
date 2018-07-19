function takeANumber(number, name){
  number.push(name);
  return(`Welcome, ${name}. You are number ${number.length} in line.`);
}

function nowServing(number){
  if(number.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    "Currently serving " + number[0] + "."
    number.shift();
  }
}

function currentLine(number){
  if(number.length === 0){
    return "The line is currently empty."
  }
  else{
    var names = ""
    for(var i = 0; i < number.length; i++){
      names = names + " " + (i + 1) + ". " + line[i] + ",";
    }
    return "The line is currently: " + names.substring(0, names.length - 1);
  }
}
