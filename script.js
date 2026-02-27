let InterviewList = [];
let RejectedList = [];

let Total = document.getElementById('total');
let InterviewCount = document.getElementById('interview');
let RejectedCount = document.getElementById('rejected');

let totalJobs = document.getElementById('total-Jobs');


let allCardsSection = document.getElementById('allCards');

let mainContainer = document.querySelector('main');

// console.log(mainContainer);

// InterviewList.push({name:'m 1'},{name:'m 1'})

let allButton = document.getElementById('all-Button');

let interviewButton = document.getElementById('interview-Button');

let rejectedButton = document.getElementById('rejected-Button');

let InterviewFiltered = document.getElementById('Interview-Filtered');


function count() {
    Total.innerText = allCardsSection.children.length;
    totalJobs.innerText = allCardsSection.children.length;


    InterviewCount.innerText = InterviewList.length;

    RejectedCount.innerText = RejectedList.length;
}

count();

function toggle(id) {
    // console.log("okok");

    allButton.classList.remove('bg-blue-600', 'text-white');
    interviewButton.classList.remove('bg-blue-600', 'text-white');
    rejectedButton.classList.remove('bg-blue-600', 'text-white');

    allButton.classList.add('bg-white', 'text-gray-500');
    interviewButton.classList.add('bg-white', 'text-gray-500');
    rejectedButton.classList.add('bg-white', 'text-gray-500');

    let selected = document.getElementById(id);

    selected.classList.remove('bg-white', 'text-gray-500');
    selected.classList.add('bg-blue-600', 'text-white');

    if (id == 'interview-Button') {
        allCardsSection.classList.add('hidden');
        InterviewFiltered.classList.remove('hidden');
    }
    else if (id == 'all-Button') {
        allCardsSection.classList.remove('hidden');
        InterviewFiltered.classList.add('hidden');
    }

}

mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('intervw'));

    if (event.target.classList.contains('intervw')) {

        // console.log(event.target.parentNode.parentNode);
        let parentNode = event.target.parentNode.parentNode;
        let A = parentNode.querySelector('.A').innerText;
        let B = parentNode.querySelector('.B').innerText;
        let C = parentNode.querySelector('.C').innerText;
        let D = parentNode.querySelector('.D').innerText;
        let E = parentNode.querySelector('.E').innerText;

        // console.log(A);
        // console.log(B);
        // console.log(C);
        // console.log(D);
        // console.log(E);

        // parentNode.querySelector('.D').classList.remove('bg-gray-300');
        // parentNode.querySelector('.D').innerHTML = `
        // <p class="intervw bg-green-200 text-green-500 border-green-600 rounded-xl">INTERVIEW</p>
        // `;
        parentNode.querySelector('.D').innerText= 'INTERVIEW';

        let cardInfo = {
            A,
            B,
            C,
            D:'INTERVIEW',
            E
        }

        let AAexist = InterviewList.find(item => item.A == cardInfo.A)

        if (!AAexist) {
            InterviewList.push(cardInfo);
        }

        render()

        // console.log(InterviewList);

    }
})

function render() {
    InterviewFiltered.innerHTML = '';

    for (let inter of InterviewList) {
        console.log(inter);
        let div = document.createElement('div');
        div.className = 'card1 flex justify-between p-8 rounded-2xl bg-white mb-4';
        div.innerHTML = `
        <!-- 1 -->
                <div class="space-y-6">
                    <div>
                        <p class="A text-.5xl font-bold">${inter.A}</p>
                        <p class="B">${inter.B}</p>
                    </div>

                    <div>
                        <p class="C">${inter.C}</p>
                    </div>

                    <div>
                        <p class="D bg-gray-300 w-[100px] h-[30px] content-center text-center rounded-[5px]">${inter.D}
                        </p>
                        <p class="E">${inter.E}</p>
                    </div>

                    <div>
                        <button class="btn bg-white text-green-500 border-green-600 hover:bg-gray-300">INTERVIEW</button>
                        <button class="btn bg-white text-red-500 border-red-600 hover:bg-gray-300">REJECTED</button>
                    </div>
                </div>

                <!-- 2 -->
                <div><i class="fa-regular fa-trash-can"></i></div>
        
        `
        InterviewFiltered.appendChild(div);
    }
}