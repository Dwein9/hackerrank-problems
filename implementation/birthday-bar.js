// https://www.hackerrank.com/challenges/the-birthday-bar

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

function solve(n, s, d, m){
  var outp = 0

  for (i = 0; i < s.length - m + 1; i++) {
    let total = s.slice(i, i + m).reduce((sum, x) => sum + x)
    d == total ? outp++ : 0
  }
  return outp
}


function main() {
  var n = parseInt(readLine());
  s = readLine().split(' ');
  s = s.map(Number);
  var d_temp = readLine().split(' ');
  var d = parseInt(d_temp[0]);
  var m = parseInt(d_temp[1]);
  var result = solve(n, s, d, m);
  process.stdout.write(""+result+"\n");
}
