let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let text1 = document.getElementById('text1');
let container = document.querySelector('.container');
let body = document.querySelector('body');


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        if (this.innerHTML == "=") {
            if (value.innerHTML == '') {
                value.innerHTML = '0';
                value.innerHTML = eval(value.innerHTML);
            }
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML == "clear") {
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    });
    
}

container.onclick = function(){
    theme = body.classList.toggle('dark');
    if (theme) {
        text1.innerHTML = 'KNJM &copy'
    } else {
        text1.innerHTML = '@JEVN-MVRC'
    }
}