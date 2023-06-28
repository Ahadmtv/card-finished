const color=document.querySelector(":root");
const buttons=document.querySelectorAll(".btn");

buttons.forEach((element) => {
    element.addEventListener('click',(event)=>{
        const type= event.currentTarget.classList;
        if(type.contains('btn1')){
            color.style.setProperty('--main-theme','#ff1756')
        }else if(type.contains('btn2')){
            color.style.setProperty('--main-theme','#1cb65d')
        }else if(type.contains('btn3')){
            color.style.setProperty('--main-theme','#8e44ad')
        }else if(type.contains('btn4')){
            color.style.setProperty('--main-theme','#f4b932')
        }else if(type.contains('btn5')){
            color.style.setProperty('--main-theme','#3498db')
        }
    
    });
});

