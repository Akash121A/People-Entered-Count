let countEle = document.getElementById("count")
let saveEle =  document.getElementById("show")
let count = 0

function Incre(){
    count+=1;
    countEle.textContent = count;
}


function save(){
    let countStr = count + " - "
    saveEle.textContent += countStr;
    countEle.textContent = 0;
    count = 0;
}
