import { lNameArr } from "../data/lastNames.js";
import { malFirstNames, femFirstNames } from "../data/firstNames.js";


document.getElementById('btnRandom').onclick = function() {
    
    // Randoms
    let rand = Math.floor(Math.random() * 1000) + 1;
    let randMale = Math.floor(Math.random() * 717) + 1;
    let randFemale = Math.floor(Math.random() * 638) + 1;
    //Declaration
    let lName = lNameArr[rand];
    let fName = femFirstNames[randFemale];
    let mName = malFirstNames[randMale];
    let y = document.getElementById('quentity').value;
    
    if(y == 0){
        alert("Please select an option!");
        document.getElementById('label1').innerHTML = "";
        document.getElementById('btnCopy').style.visibility = 'hidden';
    }
    if(y == 1){
        document.getElementById('label1').innerHTML = mName + " " + lName;
        document.getElementById('btnCopy').style.visibility = 'visible';
    }
    if(y == 2){
        document.getElementById('label1').innerHTML = fName + " " + lName;
        document.getElementById('btnCopy').style.visibility = 'visible';
    }
   
}


document.getElementById('btnCopy').onclick = function() {
    const element = document.getElementById('label1');
    
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage)


    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
}