// https://www.hackerrank.com/challenges/sock-merchant

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

function sockMerchant(n, ar) {
  var pairs = ar.reduce((obj, i) => {
    if (i in obj) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  return obj;
  },{})

  var outp = 0

  for(i in pairs){
    outp += parseInt(pairs[i] / 2)
  }
  return outp
}

function main() {
  var n = parseInt(readLine());
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = sockMerchant(n, ar);
  process.stdout.write("" + result + "\n");
}
