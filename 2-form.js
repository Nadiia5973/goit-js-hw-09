import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},s=document.querySelector(".feedback-form"),m="feedback-form-state";s.addEventListener("submit",r);s.addEventListener("input",l);function l(a){e.email=a.target.form.elements.email.value,e.message=a.target.form.elements.message.value,localStorage.setItem(m,JSON.stringify(e))}function r(a){if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}a.currentTarget.reset(),localStorage.removeItem(m),e.email="",e.message=""}function i(){const a=localStorage.getItem(m);if(a){const t=JSON.parse(a);s.elements.email.value=t.email,s.elements.message.value=t.message,e.email=t.email,e.message=t.message}}i();
//# sourceMappingURL=2-form.js.map
