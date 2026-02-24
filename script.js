let InterviewList=[];
let RejectedList=[];

let Total=document.getElementById('total');
let Interview=document.getElementById('interview');
let Rejected=document.getElementById('rejected');


let allCardsSection=document.getElementById('allCards');

console.log();

function count(){
    Total.innerText=allCardsSection.children.length;
}

count();