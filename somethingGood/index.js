document.querySelector('#add').addEventListener('click', function(){
    const a = Number(document.querySelector('#num1').value);
    const b = Number(document.querySelector('#num2').value);
    document.querySelector('#result').textContent = a+b;
});

document.querySelector('#subtract').addEventListener('click', function(){
    const a = Number(document.querySelector('#num1').value);
    const b = Number(document.querySelector('#num2').value);
    document.querySelector('#result').textContent = a-b;
});

document.querySelector('#divide').addEventListener('click', function(){
    const a = Number(document.querySelector('#num1').value);
    const b = Number(document.querySelector('#num2').value);
    document.querySelector('#result').textContent = a/b;
});
document.querySelector('#multiple').addEventListener('click', function(){
    const a = Number(document.querySelector('#num1').value);
    const b = Number(document.querySelector('#num2').value);
    document.querySelector('#result').textContent = a*b;
});
document.querySelector('#clear').addEventListener('click',function(){
    document.querySelector('#result').textContent ="";
})