// Giving a line customer
let b = 0

function takeANumber(line) {
  b++;
  return `Welcome, you are number ${b} in line.`;
}

function nowServing(line){

if (line.length === 0) {
  return "There is nobody waiting to be served!";
}

else if (line.length > 0) {
  var toBeserved = line[0];
  line.shift();
  return `Currently serving ${toBeserved}.`
}
}

function currentLine(line) {
  
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else if (line.length > 0) {
    var fullLine = [];
    for (let i =  0; i < line.length; i++){
      fullLine.push(` ${i+1}. ${line[i]}`)
    }

    return "The line is currently:" + fullLine;
  }
}



