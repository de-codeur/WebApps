// variables
let btn= document.querySelector("#new-quote");
let quote= document.querySelector(".quote");
let person= document.querySelector('.person')

const quotes=[
    {
        quote:`“I am not African because I was born in Africa 
        but because Africa was born in me.”`,
        person:`Dr Kwame Nkrumah`
    },
    {
        quote:`"Darkness cannot drive out darkness; only light can do that. Hate cannot drive
         out hate; only love can do that."`,
        person:`Martin Luther King Jr.`
    },
     {
        quote:`"Freedom is never given; it is won."`,
        person:`A. Philip Randolph`
    },
    {
        quote:`"Change will not come if we wait for some other person or some other time. We are the ones we've 
        been waiting for. We are the change that we seek."`,
        person:`Barack Obama`
    }, 
    {
        quote:`“You don't necessarily need atomic bombs to destroy a nation. Politicians who value their pockets than the life of citizens 
        always do that every day.”`,
        person:`Israelmore Ayiyor`
    }
];
btn.addEventListener("click", function(){
    let random=Math.floor(Math.random()* quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person
})