//https://www.hackerrank.com/challenges/breaking-best-and-worst-records

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

function getRecord(s){
  var lowScore = s[0], highScore = s[0], lowCount = 0, highCount = 0;

  for(let i=1; i < s.length; i++){
      if (s[i] > highScore) {
          highScore = s[i]
          highCount++
      } else if (s[i] < lowScore) {
          lowScore = s[i]
          lowCount++
      }
   }

  return [highCount, lowCount]
}

function main() {
  var n = parseInt(readLine());
  s = readLine().split(' ');
  s = s.map(Number);
  var result = getRecord(s);
  console.log(result.join(" "));

}
