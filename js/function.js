
const conatctcontainer = document.getElementById('conatctcontainer');
const contactbtn = document.getElementById('contactbtn')
const conatctcardcross = document.getElementById('conatctcardcross')
const body = document.querySelector('body')
const aboutuscontainer = document.getElementById('aboutuscontainer');
const aboutusbtn = document.getElementById('aboutusbtn')
const aboutuscardcross = document.getElementById('aboutuscardcross')

contactbtn.addEventListener("click",()=>{
   conatctcontainer.style.display='flex';
   body.style.overflowY='hidden' 
});
conatctcardcross.addEventListener("click", ()=>{ 
   conatctcontainer.style.display='none'
   body.style.overflowY='auto'
});
aboutusbtn.addEventListener("click",()=>{
   aboutuscontainer.style.display='flex';
   body.style.overflowY='hidden' 
});
aboutuscardcross.addEventListener("click", ()=>{ 
   aboutuscontainer.style.display='none'
   body.style.overflowY='auto'
});
