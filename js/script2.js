let myArr = [' ',' ',' ',' ',' ',' ',' ',' '];
let delArray = [' ',' ',' ',' ',' ',' ',' ',' '];
let element;
let text = "";
let clickCount = -1;



let wheel = document.querySelector('.wheel');
let randWheel = Math.ceil(Math.random() * 3600);


document.getElementById('btnAdd').onclick = function() {
    
    element = document.getElementById('inpName').value;
    
    if(element == "") {
        alert('Please enter a name');
    }else{

        clickCount++;

        switch(clickCount){
            case 0:
               myArr[0] = element;
               break;
            case 1:
               myArr[1] = element;
               break;
            case 2:
               myArr[2] = element;
               break;
            case 3:
               myArr[3] = element;
               break;
            case 4:
               myArr[4] = element;
               break;
            case 5:
               myArr[5] = element;
               break;
            case 6:
               myArr[6] = element;
               break;
            case 7:
               myArr[7] = element;
               break;
            default:
               alert("Maxed out elements!\nSpin The wheel");    
       }

        text = "";

        for(let i = 0; i < myArr.length; i++) {
            text = text + myArr[i] + "<br>";
        }


        document.getElementById('quentity').innerHTML = "Members of the Wheel : ";


        document.getElementById('labelName').innerHTML = text;

        

        //Declare the Wheel elements;
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


// Delete Logic
document.getElementById('btnDelete').onclick = function(){


    clickCount = -1;
    
    for(let i = 0; i < myArr.length; i++){
        myArr[i] = delArray[i];
    }



    document.getElementById('quentity').innerHTML = "";


    document.getElementById('labelName').innerHTML = "";

    //Declare the Wheel elements;
    document.getElementById('l1').innerHTML = myArr[0];
    document.getElementById('l2').innerHTML = myArr[1];
    document.getElementById('l3').innerHTML = myArr[2];
    document.getElementById('l4').innerHTML = myArr[3];
    document.getElementById('l5').innerHTML = myArr[4];
    document.getElementById('l6').innerHTML = myArr[5];
    document.getElementById('l7').innerHTML = myArr[6];
    document.getElementById('l8').innerHTML = myArr[7];
}




// Spin Logic
document.querySelector('.spinBtn').onclick = function(){
    wheel.style.transform = "rotate(" + randWheel + "deg)";
    randWheel += Math.ceil(Math.random() * 3600);

    
    var audio = document.getElementById('audio');
    audio.volume = 0.2;
    audio.play();
}