//https://www.hackerrank.com/challenges/kangaroo

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

function kangaroo(x1, v1, x2, v2) {
  if (v2 > v1 || v2 == v1) {
    return "NO"
  }

  var oneTotal = x1, twoTotal = x2

  while (oneTotal !== twoTotal) {
      oneTotal += v1
      twoTotal += v2

      if( twoTotal < oneTotal) {
          return "NO"
      }
  }

  return "YES"
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}
