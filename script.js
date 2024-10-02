let inp = document.getElementById("inp");
let adds = document.getElementById("adds");
let lists = document.getElementById("lists");

let toDoList = ()=>{
    if(inp.value){
        let lis = document.createElement('li');
        lis.innerHTML = inp.value;
        lists.appendChild(lis);

    }
}
adds.addEventListener('click' , toDoList);

