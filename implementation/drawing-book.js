// https://www.hackerrank.com/challenges/drawing-book

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

function solve(n, p){
  return Math.min(Math.floor(p/2), (Math.floor(n/2) - Math.floor(p/2)));
}

function main() {
  var n = parseInt(readLine());
  var p = parseInt(readLine());
  var result = solve(n, p);
  process.stdout.write(""+result+"\n");
}
