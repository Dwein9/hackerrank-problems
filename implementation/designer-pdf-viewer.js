// https://www.hackerrank.com/challenges/designer-pdf-viewer

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
  h = readLine().split(' ');
  h = h.map(Number);
  var word = readLine();
  var abc = 'abcdefghijklmnopqrstuvwxyz'
  var len = word.length
  var max = 0

  for (let i = 0; i < len; i++) {
     h[abc.indexOf(word[i])] > max ? max = h[abc.indexOf(word[i])] : 0
  }

  console.log(len * max)
}
