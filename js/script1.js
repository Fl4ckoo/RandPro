let x;
let y;
let z;
let text;

function changeDice(fileName){
    let img = document.querySelector("#dice");
    img.setAttribute("src", fileName);
}

function changeDice2(fileName){
    let img1 = document.querySelector("#dice2");
    img1.setAttribute("src", fileName);
}

document.getElementById('btnRoll').onclick = function(){

    

    x = Math.floor(Math.random() * 6);
    z = Math.floor(Math.random() * 6);
    y = document.getElementById('quentity').value;
    


if(y == 0){ 
    document.getElementById('label1').innerHTML = "";
    changeDice('');
    changeDice2('');
    alert("Please, Select amount of dices!");
}

if(y == 1){
        changeDice2('');
        document.getElementById('label1').innerHTML = "Your Rolled Dice";
    if(x == 1){
        changeDice('./img/dice-one.png');
    }
    if(x == 2){
        changeDice('./img/dice-two.png');
    }
    if(x == 3){
        changeDice('./img/dice-three.png');
    }
    if(x == 4){
        changeDice('./img/dice-four.png');
    }
    if(x == 5){
        changeDice('./img/dice-five.png');
    }
    if(x == 6){
        changeDice('./img/dice-six.png');
    }
}
if(y == 2){
    document.getElementById('label1').innerHTML = "Your Rolled Dice";
    /*Case of 1*/
    if(x == 1){
        changeDice('./img/dice-one.png');
    }
    if(z == 1){
        changeDice2('./img/dice-one.png');
    }

    /*Case of 2*/
    if(x == 2){
        changeDice('./img/dice-two.png');   
    }
    if(z == 2){
        changeDice2('./img/dice-two.png');
    }

    /*Case of 3*/
    if(x == 3){
        changeDice('./img/dice-three.png');
    }
    if(z == 3){
        changeDice2('./img/dice-three.png');
    }

    /*Case of 4*/
    if(x == 4){
        changeDice('./img/dice-four.png');
    }
    if(z == 4){
        changeDice2('./img/dice-four.png');
    }

    /*Case of 5*/
    if(x == 5){
        changeDice('./img/dice-five.png');        
    }
    if(z == 5){
        changeDice2('./img/dice-five.png');
    }

    /*Case of 6*/
    if(x == 6){
        changeDice('./img/dice-six.png');
    }
    if(z == 6){
        changeDice2('./img/dice-six.png');
    }
}

}