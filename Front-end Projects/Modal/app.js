// Variables 
let openBtn=document.getElementById('open-btn');
let modalContainer=document.querySelector('#modal-container');
let closeBtn=document.querySelector('.close-btn');
console.log(closeBtn)
//Event Listeners 
openBtn.addEventListener('click',function(){
    modalContainer.style.display='block';
});

closeBtn.addEventListener('click',function(){
    modalContainer.style.display='none';
})