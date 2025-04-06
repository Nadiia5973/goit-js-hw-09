const formData = {
    email: "",
    massage: ""
}
const forma = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
forma.addEventListener('submit', submitForm)
forma.addEventListener('input', inputLabel)
function inputLabel (event){
    formData.email = event.target.form.elements.email.value;
    formData.massage = event.target.form.elements.massage.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}
function submitForm(event){
event.preventDefault();
if(formData.email === '' || formData.massage === ''){
    alert("Fill please all fields");
}
event.currentTarget.reset();
localStorage.removeItem(KEY);
}
function saveText (){
    const save = localStorage.getItem(KEY);
    const parseSave = JSON.parse(save);
if(save){
   console.log(parseSave);
   forma.elements.email.value = parseSave.email;
   forma.elements.massage.value = parseSave.massage;
}
}


saveText();
