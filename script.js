let interviewContainers = []
let rejectedContainers = []
const jobContainers = document.querySelector('#jobContainers');

function setValue(){
    const total = document.querySelectorAll('.total');
    const interview = document.getElementById('interview');
    const rejected = document.getElementById('rejected');
    const value = document.getElementById('jobContainers');
    for ( let x of total){
         x.innerText = value.children.length;
    }
    interview.innerText = interviewContainers.length;
    rejected.innerText =  rejectedContainers.length;
}
setValue();
function ChangeButton(id){
     const allBtn = document.querySelector('#all-jobs');
     const interviewBtn = document.querySelector('#interview-jobs')
     const rejectedBtn = document.querySelector('#rejected-jobs');
     allBtn.classList.remove('bg-green-500' , 'text-white');
     interviewBtn.classList.remove('bg-green-500' , 'text-white');
     rejectedBtn.classList.remove('bg-green-500' , 'text-white');
     allBtn.classList.add('bg-white' , 'text-black');
     interviewBtn.classList.add('bg-white' , 'text-black');
     rejectedBtn.classList.add('bg-white' , 'text-black');
     const btn = document.getElementById(id);
     btn.classList.remove('bg-white' , 'text-black');
     btn.classList.add('bg-green-500' , 'text-white');
}

jobContainers.addEventListener('click' , function(event){
     if(event.target.classList.contains('interview-btn')){
          const container = event.target.parentNode.parentNode;
          const title = container.querySelector('')
     }
})