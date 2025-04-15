let count=0;
const inc=document.querySelector(".reset")

const incr=document.getElementById("increase")

const value=document.getElementById("value")
function increase(){
    count+=1
    
value.innerHTML=count
if(value.innerText>0){
    value.style.color="green"}

}
function reset(){
    count=0
    value.innerText=count
    if(value.innerText==0){
        value.style.color="#222"}
}
function decrease(){
    count-=1
    value.innerText=count
    if(value.innerText<0){
    value.style.color="red"}
}



