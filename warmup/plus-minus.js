//https://www.hackerrank.com/challenges/plus-minus

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
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  len = arr.length

  var pos = (arr.filter(i => i > 0).length / len).toFixed(6)
  var neg = (arr.filter(i => i < 0).length / len).toFixed(6)
  var zero = ((len - pos*len - neg*len) / len).toFixed(6)

  console.log([pos,neg,zero].join('\n'))
}
