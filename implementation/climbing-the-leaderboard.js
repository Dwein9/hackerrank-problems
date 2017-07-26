// https://www.hackerrank.com/challenges/climbing-the-leaderboard

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

//brute force solution

function main() {
  var n = parseInt(readLine());
  scores = readLine().split(' ');
  scores = scores.map(Number);
  var m = parseInt(readLine());
  alice = readLine().split(' ');
  alice = alice.map(Number);

  alice.forEach((al) => {
    scores.push(al)
    scores = uniqSort(scores)
    console.log(scores.indexOf(al) + 1)
    scores.splice(scores.indexOf(al))
  })

}

function uniqSort(ar){
  var outp =  ar.filter((el, idx, arr) => (arr.indexOf(el) === idx))
  return outp.sort((a,b) => { return b-a})
}
