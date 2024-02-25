const display = document.querySelector('.display');
const button1 = document.querySelector('#bt1');
const button2 = document.querySelector('#bt2');

 let i=0;
 display.textContent=i;
button1.addEventListener('click', () => {
    display.textContent= i--;
    if(i<0)
    {
        display.style.color='red';
    }
    else if(i==0)
    {
        display.style.color='black';
    }
    else
    {
        display.style.color='green';
    }
});
button2.addEventListener('click', () => {
    display.textContent= i++;
    if(i<0)
    {
        display.style.color='red';
    }
    else if(i==0)
    {
        display.style.color='black';
    }
    else
    {
        display.style.color='green';
    }
});