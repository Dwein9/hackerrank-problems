// https://www.hackerrank.com/challenges/the-hurdle-race

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

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  height = readLine().split(' ');
  height = height.map(Number);
  // your code goes here

  var highestHurdle = Math.max(...height)

  k - highestHurdle < 0 ? console.log(Math.abs(k-highestHurdle)) : console.log(0)
}
