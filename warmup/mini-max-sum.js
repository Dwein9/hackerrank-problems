// https://www.hackerrank.com/challenges/mini-max-sum

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
  arr = readLine().split(' ');
  arr = arr.map(Number);

  const sorted = arr.sort()
  let min = sorted.slice(0, -1).reduce((x, y) => x + y)
  let max = sorted.slice(1).reduce((x, y) => x + y)
  console.log( [min, max].join(' ') )
}
