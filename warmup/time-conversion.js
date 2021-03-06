//https://www.hackerrank.com/challenges/time-conversion

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

function timeConversion(s) {
  var hr = parseInt(s.slice(0, 2)), tod = s.slice(-2), outp = '';

  if (hr === 12) {
    tod === "AM" ? outp = ("00" + s.slice(2, -2)) : outp = s.slice(0, -2)
  } else {
    tod === "PM" ? outp = `${(hr + 12).toString()}${s.slice(2, -2)}` : outp = s.slice(0, -2)
  }

  return outp
}

function main() {
  var s = readLine();
  var result = timeConversion(s);
  process.stdout.write("" + result + "\n");
}
