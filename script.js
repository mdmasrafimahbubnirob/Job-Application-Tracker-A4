let InterviewList=[];
let RejectedList=[];

let Total=document.getElementById('total');
let InterviewCount=document.getElementById('interview');
let RejectedCount=document.getElementById('rejected');


let allCardsSection=document.getElementById('allCards');

let mainContainer=document.querySelector('main');

// console.log(mainContainer);

// InterviewList.push({name:'m 1'},{name:'m 1'})

let allButton=document.getElementById('all-Button');

let interviewButton=document.getElementById('interview-Button');

let rejectedButton=document.getElementById('rejected-Button');


function count(){
    Total.innerText=allCardsSection.children.length;

    InterviewCount.innerText=InterviewList.length;

    RejectedCount.innerText=RejectedList.length;
}

count();

function toggle(id){
    // console.log("okok");

    allButton.classList.remove('bg-blue-600','text-white');
    interviewButton.classList.remove('bg-blue-600','text-white');
    rejectedButton.classList.remove('bg-blue-600','text-white');

     allButton.classList.add('bg-white','text-gray-500');
    interviewButton.classList.add('bg-white','text-gray-500');
    rejectedButton.classList.add('bg-white','text-gray-500');

    let selected=document.getElementById(id);

    selected.classList.remove('bg-white','text-gray-500');
    selected.classList.add('bg-blue-600','text-white');
}