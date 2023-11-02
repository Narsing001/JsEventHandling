const form=document.getElementById('myForm');
const errormsgdiv=document.getElementById('errorMessages');

form.addEventListener('submit',(event)=>{ 
event.preventDefault();
errormsgdiv.innerHTML=''
const requirefeild=form.querySelector('[required]')
requirefeild.forEach((field)=>{
      if(field.value.trim() === ''){
        const fieldName = field.getAttribute('name');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `${fieldName} is required.`;
        errormsgdiv.appendChild(errorMessage)
      }
} )
})