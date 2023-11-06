
let divs = document.querySelector('#divs')
let usBtn = document.querySelector('#usBtn')
let usInput = document.querySelector('#usInput')
let inputDiv = document.querySelector('#inputDiv')
let errorMsg = document.getElementById('errorMsg');
const colors = ['red','blue','green','brown','yellow','pink','purple']

function gridSize(n) {
for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
        let div = document.createElement('div');
        div.classList.add('di')
        div.style.cssText=`width:calc(100%/${n});`

    if (n >=1 && n <= 100){
        divs.appendChild(div)}

    else {errorMsg.innerText=('value must be less >= 100')}

    div.addEventListener('mousemove',()=> {div.style.backgroundColor="black"})
}
}
    usBtn.innerText=('Reset Page')
    usBtn.addEventListener('click',()=>{location.reload()})
}

usBtn.addEventListener('click', (value) => {
        value=usInput.value;
        gridSize(value)
})
