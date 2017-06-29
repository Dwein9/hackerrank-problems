//https://www.hackerrank.com/challenges/divisible-sum-pairs

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

function divisibleSumPairs(n, k, ar) {
  var outp = 0

  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
       (ar[i] + ar[j])% k == 0 ? outp++ : 0
    }
  }
  return outp
}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = divisibleSumPairs(n, k, ar);
  process.stdout.write("" + result + "\n");

}
