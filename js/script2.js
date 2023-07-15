let myArr = ['R','A','T','I','R','A','T','I'];
myArr.length = length;
let element;
let text = "";
let index = 7;



let wheel = document.querySelector('.wheel');
let value = Math.ceil(Math.random() * 3600);


document.getElementById('btnAdd').onclick = function() {
    
    element = document.getElementById('inpName').value;

   

    

    


    if(element == "") {
        alert('Please enter a name');
    }else{
    
        myArr.unshift(element);
        
        text = "";

        for(let i = 0; i < myArr.length; i++) {
            text = text + myArr[i] + "<br>";
        }

        length = myArr.length;

        document.getElementById('quentity').innerHTML = "Members of the Wheel : " + length;


        document.getElementById('labelName').innerHTML = text;

        //Declare the Wheel Values;
        document.getElementById('l1').innerHTML = myArr[0];
        document.getElementById('l2').innerHTML = myArr[1];
        document.getElementById('l3').innerHTML = myArr[2];
        document.getElementById('l4').innerHTML = myArr[3];
        document.getElementById('l5').innerHTML = myArr[4];
        document.getElementById('l6').innerHTML = myArr[5];
        document.getElementById('l7').innerHTML = myArr[6];
        document.getElementById('l8').innerHTML = myArr[7];
    }
}

// Spin Logic
document.querySelector('.spinBtn').onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);

    
    var audio = document.getElementById('audio');
    audio.volume = 0.2;
    audio.play();
}