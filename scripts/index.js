const content = document.querySelector('.content');
const popup = document.querySelector('.popup');

//------profileEdit---variables
let profileNameElement = content.querySelector('.profile__name');
let profileDescriptionElement = content.querySelector('.profile__description');
const profileEditButtonOpen = content.querySelector('.profile__button-edit');
const profileEditPopupButtonClose = popup.querySelector('.popup__button-close');
const profileEditPopupInputName = popup.querySelector('.popup__input_value_name');
const profileEditPopupInputDescription = popup.querySelector('.popup__input_value_description');
const profileEditPopupFormSave = popup.querySelector('.popup__container-input')

//------profileEdit---functions
function profileEditPopupClose() {
	popup.classList.remove('popup_opened');
}

//------profileEdit---listeners
profileEditButtonOpen.addEventListener('click', function() {
	profileEditPopupInputName.value = profileNameElement.textContent;
	profileEditPopupInputDescription.value = profileDescriptionElement.textContent;
	popup.classList.add('popup_opened');
})

profileEditPopupButtonClose.addEventListener('click', profileEditPopupClose);

profileEditPopupFormSave.addEventListener('submit', function(evt) {
	evt.preventDefault();
	profileNameElement.textContent = profileEditPopupInputName.value;
	profileDescriptionElement.textContent = profileEditPopupInputDescription.value;
	profileEditPopupClose();
});