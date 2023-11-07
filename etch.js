const colors = ['red','blue','green','brown','yellow','pink','purple']

let divs = document.querySelector('#divs')
let usBtn = document.querySelector('#usBtn')
let usInput = document.querySelector('#usInput')
let inputDiv = document.querySelector('#inputDiv')
let rainbowBtn = document.querySelector('#rainbowBtn')
let darkBtn = document.querySelector('#darkBtn');
let errorMsg = document.getElementById('errorMsg');


function randColors(){
    let randcolor = Math.floor(Math.random()*7);
    return(colors[randcolor])
}
randColors()

let div = document.createElement('div');
div.classList.add('di')

function gridSize(n) {
    if(n >=1 && n <= 100){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                let clonediv= div.cloneNode(true);
                divs.appendChild(clonediv)
                div.style.backgroundColor='black'
                clonediv.style.cssText=(`width: calc(100%/${n});
                height: calc(100%/${n})`);

                darkBtn.addEventListener('click',()=>{
                    clonediv.addEventListener('mousemove',(s)=>{
                        clonediv.style.backgroundColor="black";
                    })
                })
                rainbowBtn.addEventListener('click',()=>{
                    clonediv.addEventListener('mousemove',(s)=>{
                        clonediv.style.backgroundColor=`${randColors()}`;
                    })
                })
            }
        }
    }
    else {errorMsg.innerText=('Value should be >= 100')}
}

   


usBtn.addEventListener('click', (value) => {
        value=usInput.value; gridSize(value);
        usBtn.innerText=('Reset Page')
        usBtn.addEventListener('click',()=>{location.reload()})
       
})
