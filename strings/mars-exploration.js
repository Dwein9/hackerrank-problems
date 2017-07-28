// https://www.hackerrank.com/challenges/mars-exploration

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
  var S = readLine();
  var outp = 0

  for(let i=0; i<S.length; i+=3){
      let sos = S.slice(i,i+3)

      sos[0] !== 'S' ? outp++ : 0
      sos[1] !== 'O' ? outp++ : 0
      sos[2] !== 'S' ? outp++ : 0
  }

  console.log(outp)
}
