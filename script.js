let input= document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML== '='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string= " ";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            console.log('Before deletion:', string); // Add this line for debugging
        
            // Ensure 'string' is a non-empty string before attempting to delete
            if (typeof string === 'string' && string.length > 0) {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                string = ''; // Set to an empty string if it's not a valid string
                input.value = '0';
            }
        
            console.log('After deletion:', string); // Add this line for debugging
        }
        
        
        else{
        string += e.target.innerHTML;
        input.value=string;
        }
    })
})