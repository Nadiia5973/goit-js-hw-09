import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},s=document.querySelector(".feedback-form"),t="feedback-form-state";s.addEventListener("submit",i);s.addEventListener("input",m);function m(a){e.email=a.target.form.elements.email.value,e.message=a.target.form.elements.message.value,localStorage.setItem(t,JSON.stringify(e))}function i(a){if(a.preventDefault(),e.email===""){alert("Fill please all fields, please fill in Email");return}if(e.message===""){alert("Fill please all fields, please fill in Message");return}console.log(e),a.currentTarget.reset(),localStorage.removeItem(t),e.email="",e.message=""}function r(){const a=localStorage.getItem(t);if(a){const l=JSON.parse(a);s.elements.email.value=l.email,s.elements.message.value=l.message,e.email=l.email,e.message=l.message}}r();
//# sourceMappingURL=2-form.js.map
