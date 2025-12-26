let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText= inp.value;
    
    let delBtn = document.createElement("buttion");
    delBtn.innerText= "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodename == "button"){
        let litsItem = event.target.parentElement;
        litsItem.remove();
        console.log("deleted");
    }
})