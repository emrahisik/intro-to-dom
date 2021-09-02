let h1 = document.querySelector('.intro');
console.log(h1);


document.querySelector('.style-changer').addEventListener('click',function(event){
    console.log(event);
    h1.style.backgroundColor="red";
})

let keyDiv = document.querySelector('.keys');
/*document.addEventListener('keydown',function(event){
    let key = event.key;
    let span = document.createElement('span');
    span.innerHTML= key;
    keyDiv.appendChild(span);
});*/

window.addEventListener('load', function(event){
    let storedVal = sessionStorage.getItem('blogPost');
    keyDiv.innerHTML = storedVal;
});

document.querySelector('form.blog').addEventListener('submit',function(event){
    event.preventDefault();
    let email = document.querySelector('#email').value;
    let comment = document.querySelector('#comment').value;
    console.log(email,comment);
    let newHTML = `
        <h3>${email}</h3>
        <p>${comment}<p>
    `;
    keyDiv.innerHTML = newHTML;
    sessionStorage.setItem('blogPost',newHTML);
});

document.querySelector('.radioForm').addEventListener('submit', function(event){
    event.preventDefault();
    let chosenVal = document.querySelector('input[name=exampleRadios]:checked').value;
    console.log(chosenVal);
    document.querySelector('.output').innerHTML=`You chose ${chosenVal}`;

})