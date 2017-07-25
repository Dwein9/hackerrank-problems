// https://www.hackerrank.com/challenges/picking-numbers

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
  a = readLine().split(' ');
  a = a.map(Number);

  var a = a.sort((a, b) => {return a - b})
  var arr = []
  var outp

  for(let i =0; i< a.length; i++){
    let test = [a[i]]

    for(let j = i+1; j < a.length; j++){
      Math.abs(a[i] - a[j]) <= 1 ? test.push(a[j]) : 0
    }

    test.length > arr.length ? arr = test : 0
  }

  arr.filter(a => a <= arr[0]).length  >= arr.filter(a => a >= arr[0]).length
    ? outp = arr.filter(a => a <= arr[0]).length
    : outp = arr.filter(a => a >= arr[0]).length

  console.log(outp)
}
