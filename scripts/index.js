let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupName = document.querySelector('.popup__input_type_name');
let popupDescriprion = document.querySelector('.popup__input_type_description');
let popupSubmit = document.querySelector('.popup__submit');
let popupClose = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form')

function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDescriprion.value = profileDescription.textContent;
}
profileEditButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closePopup);

function saveSubmit(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescriprion.value;
    closePopup();
}
popupForm.addEventListener('submit', saveSubmit);