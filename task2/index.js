let contain= document.getElementById('hold');
let ip= document.getElementById('inputf');
let btn= document.getElementById('addbtn');

btn.addEventListener('click',()=>{

    if (ip.value === ""){
        alert("Dude!...you forgot to enter what you wanna do");
    }
    else{
    var div=document.createElement('div');
    div.classList.add('div');

    var task= document.createElement('p');
    task.classList.add('task');
    task.innerText= ip.value;
    div.appendChild(task);
    ip.value= "";

    var but=document.createElement('button');
    but.classList.add('but');
    but.innerText="-";
    div.appendChild(but);

    contain.appendChild(div);
    }
    
    but.addEventListener('click',()=>{
        div.removeChild(task);
        div.removeChild(but);
    })

    task.addEventListener('click',()=>{
        task.style.textDecoration= "line-through";
    })

})