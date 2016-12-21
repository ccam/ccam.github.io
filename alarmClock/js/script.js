var audio = new Audio('js/wait.mp3');

function clock() {
  var time = new Date();
  var hours = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var currentTime = hours + ":" + min + ":" + sec;

  document.getElementById('display').innerHTML = currentTime;
  //setTimeout(clock, 200);
  alarm(currentTime);
};

function setTime() {
  var setHours = document.getElementById('hours').value;
  var setMin = document.getElementById('min').value;
  var vsetTime = setHours + ':' + setMin;
  alarm(vsetTime);
};


function alarm(currentTime, vsetTime) {
console.log(vsetTime);

};
/* 

var audio = new Audio('js/wait.mp3');
var time = new Date();
var hours = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();



function clock() {
  var currentTime = hours + ':' + min +':' + sec;
    document.getElementById('display').innerHTML = currentTime;
    setTimeout(clock, 1000);
    console.log(currentTime);
};

function setTime() {
    var setHours = document.getElementById('hours').value;
    var setMin = document.getElementById('min').value;
    var setTime = setHours + ':' + setMin;
    alarm();

    function alarm() {
        if (setTime == currentTime) {
            console.log(setTime)
            console.log(currentTime)
            audio.play();
        };
    };
};
*/