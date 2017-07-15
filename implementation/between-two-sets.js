// https://www.hackerrank.com/challenges/between-two-sets

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

//solution

function getTotalX(a, b){
  var outp = 0
  for(let i = a[0]; i<=b[0]; i++){
    isMultiple(i,a) && isFactor(i,b) ? outp++ : 0
  }
  return outp
}

function isMultiple(num, arr){
  return arr.filter((i) => num % i === 0).length === arr.length
}

function isFactor(num, arr){
  return arr.filter((i) => i % num === 0).length === arr.length
}



function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var m = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);
  b = readLine().split(' ');
  b = b.map(Number);
  var total = getTotalX(a, b);
  process.stdout.write(""+total+"\n");
}
