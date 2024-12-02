const c = document.querySelector(".container");
c.style = "display:flex; flex-wrap:wrap;";
for(let i = 1;i<=16;i++){
    let k = document.createElement("div");
    
    k.className = "cool";
  
    c.appendChild(k);

}