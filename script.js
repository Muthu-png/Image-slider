let count = 1;
let img = document.querySelector("img");

setInterval(()=>{
    if(count > 6){
        count = 1;
    }

    img.src = `./images/img${count}.jpg`;
    count++;
},1000);