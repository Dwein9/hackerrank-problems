//https://www.hackerrank.com/challenges/staircase

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
    let x = 1;

    while (x <= n) {
      console.log(Array((n+1)-x).join(" ").concat(Array(x+1).join('#')))
      x ++
    }
}
