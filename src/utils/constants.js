const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const profileEditButton = document.querySelector(".profile__edit");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputDescriprion = document.querySelector(
  ".popup__input_type_description"
);
const popupProfileEdit = document.querySelector('.popup_profile');
const cardAddButton = document.querySelector(".profile__add-content");
const cardContainer = document.querySelector(".element");
const profileForm = document.querySelector(".popup__profile-form");
const popupImage = document.querySelector(".popup_image");
const popupCard = document.querySelector('.popup_card')
const popupDelete = document.querySelector('.popup_delete');
const addAvatarButton = document.querySelector('.profile__avatar-button');
const popupAvatar = document.querySelector('.popup_avatar')
const cardForm = document.querySelector(".popup__card-form");
const avatarForm = document.querySelector(".popup__avatar-form");

 
const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

  export {initialCards, popupDelete, cardForm, avatarForm, popupAvatar, addAvatarButton, popupCard, popupImage, popupProfileEdit, profileEditButton, profileForm, popupInputName, popupInputDescriprion, cardAddButton, cardContainer, enableValidation};