// https://www.hackerrank.com/challenges/counting-valleys

function processData(input) {
  var arr = input.split('\n')[1]
  var valleys = 0
  var loc = 0
  for(let i=0; i<arr.length; i++){
      if (arr[i] == 'U' && loc == -1){
          valleys += 1
          loc++
      } else {
       arr[i] == 'U' ? loc++ : loc--
      }
  }
  console.log(valleys)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
