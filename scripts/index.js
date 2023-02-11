const content = document.querySelector('.content');

//---profile
let profileName = 'Жак-Ив Кусто'; 
let profileDescription = 'Исследователь океана';

//------page-name-description
const profileNameElement = content.querySelector('.profile__name');
profileNameElement.textContent = profileName;
const profileDescriptionElement =  content.querySelector('.profile__description');
profileDescriptionElement.textContent = profileDescription;

//------popup-edit--open
const profileEditButtonOpen = content.querySelector('.profile__button-edit');
if(!profileEditButtonOpen) {
	throw new Error('No profileEditButtonOpen')
}
profileEditButtonOpen.addEventListener('click', function() {
	const profileEditPopup = content.querySelector('.popup')
	profileEditPopup.classList.add('popup_opened')
});
//------popup-edit--close
const profileEditPopupButtonClose = content.querySelector('.popup__button-close');
if(!profileEditPopupButtonClose) {
	throw new Error('No profileEditPopupButtonClose')
}
profileEditPopupButtonClose.addEventListener('click', closePopup);

function closePopup() {
	const profileEditPopup = content.querySelector('.popup')
	profileEditPopup.classList.remove('popup_opened')
}

//------popup-edit-name-description
const profileNamePopupInput = content.querySelector('.popup__name');
profileNamePopupInput.value = profileName;
const profileDescriptionPopupInput = content.querySelector('.popup__description');
profileDescriptionPopupInput.value = profileDescription;
//------popup-edit--save
const profileEditPopupButtonSave = content.querySelector('.popup__button-save');
if(!profileEditPopupButtonSave) {
	throw new Error('No profileEditPopupButtonSave')
}
profileEditPopupButtonSave.addEventListener('click', function() {
	profileNameElement.textContent = profileNamePopupInput.value;
	profileDescriptionElement.textContent = profileDescriptionPopupInput.value;
	if (profileNamePopupInput.value.length === 0) {
		profileNameElement.insertAdjacentHTML('beforeend', `
		<p class="profile__name profile__name_undefined">Нет имени</p>`);
	}
	if (profileDescriptionPopupInput.value.length === 0) {
		profileDescriptionElement.insertAdjacentHTML('beforeend', `
		<p class="profile__description profile__description_undefined">Нет описания</p>`);
	}
	closePopup()
});

function handleFormSubmit (evt) {
	evt.preventDefault();
	const profileNamePopupInput = content.querySelector('.popup__name');
	profileNamePopupInput.value = profileName;
	const profileDescriptionPopupInput = content.querySelector('.popup__description');
	profileDescriptionPopupInput.value = profileDescription;
