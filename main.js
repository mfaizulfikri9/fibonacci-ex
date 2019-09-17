
var fibValue = document.getElementById('fibValue');

document.querySelector('form').addEventListener('submit', getFib);



window.addEventListener('click', outSideClick);



function getFib(e){
    e.preventDefault();

    if (isNaN(fibValue.value) || fibValue.value == null || fibValue.value == ''){
        alert('Pls enter a number!');
    }else{
        var a,b,n, result;
        n = fibValue.value;
        arr = [1]
        a=0;
        b=1;
        result=b;

        for(var i = 1; i < n; i++){
            result = a + b;
            a= b;
            b= result;
            arr.push(b);
        }

        var output = `<h4 id="fabinputValue" class= "py-3">Your entered: ${fibValue.value}</h4>
                    <p id="fabNum">Your Fibonacci: </p>`;
        for(var i in arr){
           output +=
           `<span class="badge badge-success p-2 m-2"> " ${arr[i]} "</span>`
        }
        fibValue.value = '';
        document.getElementById('output').innerHTML = output;
    }
}

function outSideClick(e){
    if (e.target != fibValue){
       getFib(e);
    }
}





