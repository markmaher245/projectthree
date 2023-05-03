let btn         =document.querySelector(".generate")
let serialnumber=document.querySelector(".serial")


btn.onclick=function(){
    let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let countcharacters=10;
    let empty="";
    for (let i=0; i<countcharacters ;i++){
        empty+=characters[Math.floor(Math.random() * characters.length)];
    }
    serialnumber.innerHTML=empty;
};
