let interviewContainers = []
let rejectedContainers = []
let lastID = 'all-jobs';
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
     const newJobContainers = document.getElementById('new-job-containers');
     newJobContainers.innerHTML = '';
     if (id === 'all-jobs'){
         newJobContainers.classList.add('hidden');
         jobContainers.classList.remove('hidden');
     }else if (id === 'interview-jobs'){
          jobContainers.classList.add('hidden');
          newJobContainers.classList.remove('hidden');
          renderInterview();
     }else{
           jobContainers.classList.add('hidden');
           newJobContainers.classList.remove('hidden');
           renderRejected();
     }
     lastID = id;
}

document.querySelector('main').addEventListener('click' , function(event){
     // console.log(event.target);
     if(event.target.classList.contains('interview-btn')){
          const container = event.target.parentNode.parentNode;
          const title = container.querySelector('.title').innerText;
          const position = container.querySelector('.position').innerText;
          const salary = container.querySelector('.salary').innerText;
          const status = container.querySelector('.status-ase');
          const details = container.querySelector('.details').innerText;
          status.innerText = 'INTERVIEW';
          const obj = {
              title,
              position,
              statusValue : 'INTERVIEW',
              salary ,
              details
          };
          if(!interviewContainers.some(obj => obj.title === title)){
              interviewContainers.push(obj);
          }
          console.log(interviewContainers);
          rejectedContainers = rejectedContainers.filter(obj => obj.title !== title)
          setValue(); 
          ChangeButton(lastID);   
     }
     else if(event.target.classList.contains('rejected-btn')){
          const container = event.target.parentNode.parentNode;
          const title = container.querySelector('.title').innerText;
          const position = container.querySelector('.position').innerText;
          const salary = container.querySelector('.salary').innerText;
          const status = container.querySelector('.status-ase');
          const details = container.querySelector('.details').innerText;
          status.innerText = 'REJECTED';
          const obj = {
              title,
              position,
              statusValue : 'REJECTED',
              salary,
              details
          };
          if(!rejectedContainers.some(obj => obj.title === title)){
              rejectedContainers.push(obj);
          }
          interviewContainers = interviewContainers.filter(obj => obj.title !== title)
          console.log(rejectedContainers);
          ChangeButton(lastID);
          setValue();
     }
     else if (event.target.parentNode.classList.contains('delete-btn')){
          console.log(event.target.parentNode.parentNode.parentNode);
          const container = event.target.parentNode.parentNode.parentNode;
          const title = container.querySelector('.title').innerText; 
          
          console.log(title);
          rejectedContainers = rejectedContainers.filter(obj => obj.title !== title)
          interviewContainers = interviewContainers.filter(obj => obj.title !== title)
          event.target.parentNode.parentNode.parentNode.remove();   
          ChangeButton(lastID);
          setValue();
     }
});

function renderInterview(){
     const newJobContainers = document.getElementById('new-job-containers');

     if (interviewContainers.length == 0){
           let div = document.createElement('div');
           div.className = `flex justify-center items-center h-[60vh] bg-white`;
           div.innerHTML = `<div class="text-center flex flex-col">
            <img src="./assignment_7959593 1.png" alt="">
            <h1 class="font-bold text-3xl">No jobs available</h1>
            <p>Check back soon for new job opportunities</p>
            </div>`
           newJobContainers.appendChild(div);
           return;
     }
     for (let newSection of interviewContainers){
         let div = document.createElement('div');
         div.className = `p-8 bg-white space-y-3 transition-all duration-300 hover:-translate-y-2  hover:scale-[1.02]`;
         div.innerHTML = ` <div class="flex justify-between">
                <div>
                 <h1 class="title font-bold text-xl">${newSection.title}</h1>
                 <p class="position">${newSection.position}</p>
                </div>
                <button class="delete-btn p-4 rounded-full bg-base-200 cursor-pointer hover:bg-slate-600 hover:text-white active:scale-95"><i class="fa-solid fa-trash"></i></button>
             </div>
             
             <p class="salary">${newSection.salary}</p>
             <button class="status-ase bg-gray-300 px-4 py-2 rounded">${newSection.statusValue}</button>
             <p class="details">${newSection.details}</p>
             <div class="space-x-2">
                <button  class="interview-btn px-4 py-2 font-bold border-green-400 border-2 text-green-500 transition-all duration-300 active:scale-95 hover:bg-green-500 hover:text-white hover:cursor-pointer rounded">INTERVIEW</button>
                <button class="rejected-btn px-4 py-2 font-bold border-red-400 border-2 text-red-500 transition-all duration-300 active:scale-95 hover:bg-red-500 hover:text-white hover:cursor-pointer rounded">REJECTED</button>
             </div>`;
             newJobContainers.appendChild(div);
     }
}
function renderRejected(){
     const newJobContainers = document.getElementById('new-job-containers');
     if (rejectedContainers.length == 0){
           let div = document.createElement('div');
           div.className = `flex justify-center items-center h-[60vh] bg-white`;
           div.innerHTML = `<div class="text-center flex  flex-col">
            <img src="./assignment_7959593 1.png" alt="">
            <h1 class="font-bold text-3xl">No jobs available</h1>
            <p>Check back soon for new job opportunities</p>
            </div>`
           newJobContainers.appendChild(div);
           return;
     }
     for (let newSection of rejectedContainers){
         let div = document.createElement('div');
         div.className = `p-8 bg-white space-y-3 transition-all duration-300 hover:-translate-y-2  hover:scale-[1.02]`;
         div.innerHTML = ` <div class="flex justify-between">
                <div>
                 <h1 class="title font-bold text-xl">${newSection.title}</h1>
                 <p class="position">${newSection.position}</p>
                </div>
                <button class="delete-btn p-4 rounded-full bg-base-200 cursor-pointer hover:bg-slate-600 hover:text-white active:scale-95"><i class="fa-solid fa-trash"></i></button>
             </div>
             
             <p class="salary">${newSection.salary}</p>
             <button class="status-ase bg-gray-300 px-4 py-2 rounded">${newSection.statusValue}</button>
             <p class="details">${newSection.details}</p>
             <div class="space-x-2">
                <button  class="interview-btn px-4 py-2 font-bold border-green-400 border-2 text-green-500 transition-all duration-300 active:scale-95 hover:bg-green-500 hover:text-white hover:cursor-pointer rounded">INTERVIEW</button>
                <button class="rejected-btn px-4 py-2 font-bold border-red-400 border-2 text-red-500 transition-all duration-300 active:scale-95 hover:bg-red-500 hover:text-white hover:cursor-pointer rounded">REJECTED</button>
             </div>`;
             newJobContainers.appendChild(div);
     }
}

