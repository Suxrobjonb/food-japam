let elForm = document.querySelector (".site__form")
let elInput = document.querySelector (".form__input")
let elList = document.querySelector (".site__list")


elForm.addEventListener("submit", function(evt){
   evt.preventDefault();
 
   let inputValue = elInput.value;
   
   let foodList = [""]
   foodList.push;
 
   for ( foodList of inputValue ) {
 
   let elItem = document.createElement("li");
   elItem.textContent = inputValue;
   elList.appendChild(elItem);
   elItem+= food[i];
 }
 })