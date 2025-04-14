const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
form.addEventListener('submit', submitForm);
form.addEventListener('input', inputLabel);
function inputLabel(event) {
  formData.email = event.target.form.elements.email.value;
  formData.message = event.target.form.elements.message.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}
function submitForm(event) {
  event.preventDefault();
if (formData.email === ""){
  alert("Fill please all fields, please fill in Email");
  return;
}
if (formData.message === ""){
  alert("Fill please all fields, please fill in Message");
  return;
}
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
  formData.email = '';
  formData.message = '';
}
function saveText() {
  const save = localStorage.getItem(KEY);

  if (save) {
    const parseSave = JSON.parse(save);
    form.elements.email.value = parseSave.email;
    form.elements.message.value = parseSave.message;
    formData.email = parseSave.email;
    formData.message = parseSave.message;
  }
}
saveText();
