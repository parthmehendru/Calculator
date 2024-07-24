let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if (typeof string !== 'string') {
            string = String(string);
        }

        if(e.target.innerHTML == '='){
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == 'C'){
            string=""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML== '<img src="backspace.svg" alt="">'){
            string = string.slice(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '()') {
            if (string.search(/\(/) == -1) {
                string = string + '(';
                document.querySelector('input').value = string;
            } else {
                string = string + ')';
                document.querySelector('input').value = string;
            }
        }
        else if(e.target.innerHTML =='*'){
            if(string.search(/\d/) !== -1){
                string = string + '*';
                document.querySelector('input').value = string;
            }
        }
        else if( e.target.innerHTML=='/'){
            if(string.search(/\d/) !== -1){
                string = string + '/';
                document.querySelector('input').value = string;
            }
        }
        else{
            
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    })
})