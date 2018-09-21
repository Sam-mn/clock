function showTime() {


var now = new Date(),

    hours = now.getHours(),

    minutes = now.getMinutes(),

    seconds = now.getSeconds();

    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }

document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}

window.onload = function () {
    
    setInterval(showTime, 500);
};

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
})

var inputOne = document.getElementById("input1");
var inputTwo = document.getElementById("input2");
var buton1 = document.getElementById('button1'),
    buton2 = document.getElementById('button2'),
    buton3 = document.getElementById('button3'),
    buton4 = document.getElementById('button4'),
    equal1 = document.getElementById('equal');
    buton1.addEventListener('click', function () {
        console.log(inputOne, inputTwo);
        
        equal1.innerHTML = Number(inputOne.value) + Number(inputTwo.value);
    });
    buton2.addEventListener('click', function () {
        console.log(inputOne, inputTwo);
        
        equal1.innerHTML = inputOne.value - inputTwo.value;
    });
    buton3.addEventListener('click', function () {
        console.log(inputOne, inputTwo);
        
        equal1.innerHTML = inputOne.value * inputTwo.value;
    });
    buton4.addEventListener('click', function () {
        console.log(inputOne, inputTwo);
        
        equal1.innerHTML = inputOne.value / inputTwo.value;
    });
