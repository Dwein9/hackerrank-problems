// https://www.hackerrank.com/challenges/migratory-birds

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

// solution

function migratoryBirds(n, ar) {
  var birds = ar.reduce((obj, i) => {
    i in obj ? obj[i]++ : obj[i] = 1
	  return obj
  }, {} )

  var max = 0, bird = 16, outp = 0
  for(i in birds){
    if (birds[i] > max) {
      max = birds[i]
      outp = i
    } else if (birds[i] == max && i < bird) {
      max = birds[i]
      outp = i
      bird = i
    }
  }
  return outp
}

function main() {
  var n = parseInt(readLine());
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = migratoryBirds(n, ar);
  process.stdout.write("" + result + "\n");
}
