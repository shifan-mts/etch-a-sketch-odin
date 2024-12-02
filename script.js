let c = document.querySelector(".container");
c.style = "display:flex; flex-wrap:wrap;";
for(let j = 1;j<=16;j++){
for(let i = 1;i<=16;i++){
    let k = document.createElement("div");
    
    k.className = "cool";
  
    c.appendChild(k);

} }

function cool(){
    let n = prompt("enter the number of sides:");
    c.remove();
    c = document.createElement("div");
    c.className = "container";
    c.style = "display:flex; flex-wrap:wrap;";
    document.querySelector("body").appendChild(c);
    for(let i =1;i<=n;i++){
        for(let j = 1;j<=n;j++){
            let k = document.createElement("div");
    
    k.className = "cool";
  
    c.appendChild(k);
        }
    }
}