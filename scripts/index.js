//photo data
const photos = [
	{
		image: 'https://images.unsplash.com/photo-1483918987409-fc98fd3e0bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
		name: 'Череповец',
		alt: 'Фото моста в Череповеце'
	},
	{
		image: 'https://images.unsplash.com/photo-1623417860037-0dc7ab15fbca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
		name: 'Москва',
		alt: 'Фото моста в Москве'
	},
	{
		image: 'https://images.unsplash.com/photo-1649688895117-6f1d52398218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		name: 'Нижний Новгород',
		alt: 'Фото моста в Нижнем Новгороде'
	},
	{
		image: 'https://images.unsplash.com/photo-1625511838614-d8911ef292eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		name: 'Новосибирск',
		alt: 'Фото моста в Новосибирске'
	},
	{
		image: 'https://images.unsplash.com/photo-1634321345030-6e3f30011c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		name: 'Санкт-Петербург',
		alt: 'Фото моста в Санкт-Петербурге'
	},
	{
		image: 'https://images.unsplash.com/photo-1540388482879-c02f7127c83f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		name: 'Владивосток',
		alt: 'Фото моста во Владивостоке'
	}
]

//variables
//------page
const content = document.querySelector('.content');
const profileNameElement = content.querySelector('.profile__name');
const profileDescriptionElement = content.querySelector('.profile__description');
const profileEditButtonOpen = content.querySelector('.profile__button-edit');
const photoAddButtonOpen = content.querySelector('.profile__button-add');
const photoSection = content.querySelector('.photo')
//------photo template
const photoTemplate = document.querySelector('#photo__template');
//------popup
const closeButtons = document.querySelectorAll('.popup__button-close');
//------popup profile edit
const profileEditPopup = document.querySelector('#profile');
const profileEditButtonClose = profileEditPopup.querySelector('.popup__button-close');
const profileEditPopupInputName = profileEditPopup.querySelector('.popup__input_value_profile-name');
const profileEditPopupInputDescription = profileEditPopup.querySelector('.popup__input_value_profile-description');
const profileEditPopupFormSave = profileEditPopup.querySelector('.popup__container-input');
//------popup photo add
const photoAddPopup = document.querySelector('#photo-add');
const photoAddPopupButtonClose = photoAddPopup.querySelector('.popup__button-close');
const photoAddInputName = photoAddPopup.querySelector('.popup__input_value_place-name');
const photoAddInputImg = photoAddPopup.querySelector('.popup__input_value_place-img-url');
const photoAddPopupFormSave = photoAddPopup.querySelector('.popup__container-input');
//------popup photo large format
const photoLargeFormatPopup = document.querySelector('#photo-large-format');
const photoLargeFormatButtonClose = photoLargeFormatPopup.querySelector('.popup__button-close');
const photoLargeFormatName = photoLargeFormatPopup.querySelector('.popup__photo-name');
const photoLargeFormatImg = photoLargeFormatPopup.querySelector('.popup__photo-img');

//existing data
photos.forEach((photo) => {
	const photoData = createPhoto(photo);
	photoSection.append(photoData);	
})

//functions
function openPopup (popup) {
	popup.classList.add('popup_opened');
}
function closePopup (popup) {
	popup.classList.remove('popup_opened');
}
function createPhoto (photo) {
	const photoElement = photoTemplate.content.cloneNode(true);
	const photoElementImg = photoElement.querySelector('.photo__img');
	photoElementImg.setAttribute('src', photo.image);
	photoElementImg.setAttribute('alt', photo.alt);
	photoElementImg.addEventListener('click', handlerPhotoLargeFormat);
	photoElement.querySelector('.photo__name').textContent = photo.name;
	photoElement.querySelector('.photo__trash-bin').addEventListener('click', handlerPhotoButtonDelete);
	photoElement.querySelector('.photo__like').addEventListener('click', handlerPhotoLike);
	return photoElement;
};
function addPhoto (photo) {
	const photoNew = createPhoto(photo);
	photoSection.prepend(photoNew);	
}
function handlerPhotoLike (like) {
	like.target.classList.toggle('photo__like_active');
};
function handlerPhotoButtonDelete (button) {
	button.target.closest('.photo__container').remove();
};
function handlerPhotoLargeFormat (img) {
	const currentImg = img.target.closest('.photo__img');
	const currentContainer = currentImg.closest('.photo__container');
	photoLargeFormatPopup.style = "background-color: rgba(0, 0, 0, 0.9);";
	photoLargeFormatImg.setAttribute('src', currentImg.src);
	photoLargeFormatImg.setAttribute('alt', currentImg.alt);
	photoLargeFormatName.textContent = currentContainer.querySelector('.photo__name').textContent;
	openPopup(photoLargeFormatPopup)
};

//listeners
//------page
profileEditButtonOpen.addEventListener('click', function() {
	openPopup(profileEditPopup);
	profileEditPopupInputName.value = profileNameElement.textContent;
	profileEditPopupInputDescription.value = profileDescriptionElement.textContent;
});
photoAddButtonOpen.addEventListener('click', function() {
	openPopup(photoAddPopup);
});
//------popup
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
//------popup profile edit
profileEditPopupFormSave.addEventListener('submit', function(evt) {
	evt.preventDefault();
	profileNameElement.textContent = profileEditPopupInputName.value;
	profileDescriptionElement.textContent = profileEditPopupInputDescription.value;
	closePopup(profileEditPopup);
});
//------popup photo add
photoAddPopupFormSave.addEventListener('submit', function(evt) {
	evt.preventDefault();
	const image = photoAddInputImg.value;
	const name = photoAddInputName.value;
	const alt = `Фото из ${name}`
	const photoNew = {
		image,
		name,
		alt,
	}
	addPhoto(photoNew);
	evt.target.reset();
	closePopup(photoAddPopup);
});