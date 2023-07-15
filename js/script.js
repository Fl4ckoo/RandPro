let min;
let max;
let y;





document.getElementById('btnRand').onclick = function() {
    min = document.getElementById("inpMin").value;
    max = document.getElementById("inpMax").value;
    min = parseInt(min);
    max = parseInt(max);
    let diff = max - min; 
    y = Math.floor(Math.random() * diff);

    y = y + min;

    document.getElementById('xLabel').innerHTML = "Your Random Number is : " + y;
    
}