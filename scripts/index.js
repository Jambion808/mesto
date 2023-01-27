import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./constants.js";

const popupEditProfile = document.querySelector(".popup_profile");
const profileEditButton = document.querySelector(".profile__edit");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputDescriprion = document.querySelector(".popup__input_type_description");
const popupProfileForm = document.querySelector(".popup__profile-form");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const buttonCloseEditProfilePopup = document.querySelector(".popup__close-profile");
const cardAddButton = document.querySelector(".profile__add-content");
const popupCard = document.querySelector(".popup_card");
const cardInputPlace = document.querySelector(".popup__input_type_place");
const cardInputLink = document.querySelector(".popup__input_type_url");
const popupCardForm = document.querySelector(".popup__card-form");
const cardContainer = document.querySelector(".element");
const popupCardClose = document.querySelector(".popup__close-card");
const cardSubmitButton = document.querySelector(".popup__submit_type_card");
const popupImageClose = document.querySelector(".popup__image-close");
const popupImage = document.querySelector(".popup_image");

//Открытие всех попапов 
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener("mousedown", closePopupOutsideClick);
}

//Закрытие всех попапов 
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  document.removeEventListener("mousedown", closePopupOutsideClick);
}

//Закрытие попапов на ESC 
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//Закрытие попапов на оверлей 
function closePopupOutsideClick(evt) {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains("popup_opened")) {
    closePopup(eventTarget);
  }
}

//Закрытие попапа профиля 
buttonCloseEditProfilePopup.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

//закрытие попап изображения
popupImageClose.addEventListener("click", function () {
  closePopup(popupImage);
});

//Закрытие попапа создания карточки 
popupCardClose.addEventListener("click", function () {
  closePopup(popupCard);
});

//Кнопка редактировани профиля !
profileEditButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
  popupInputName.value = profileName.textContent;
  popupInputDescriprion.value = profileDescription.textContent;
});

//Сабмит профиля 
function submitEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescriprion.value;
  closePopup(popupEditProfile);
}

popupProfileForm.addEventListener("submit", submitEditProfileForm);

// Кнопка добавления новой карточки, пустые поля, дезактивация сабмита 
cardAddButton.addEventListener("click", function () {
  cardInputPlace.value = "";
  cardInputLink.value = "";
  openPopup(popupCard);
  cardSubmitButton.classList.add("popup__submit_disabled");
  cardSubmitButton.setAttribute("disabled", "disabled");
});

//Сохрание карточки 
function submitCardForm(event) {
  event.preventDefault();
  const addValues = {
    name: cardInputPlace.value,
    link: cardInputLink.value,
  };
  createCard(addValues);
  closePopup(popupCard, popupCardForm);
}

popupCardForm.addEventListener("submit", submitCardForm);

//Создание карточек
const mapNewCard = initialCards.map(function(item) {
  return {
    name: item.name,
    link: item.link
  };
});

const addCard = (newCard) => {
  cardContainer.prepend(newCard)
};

function createCard(item) {
  const card = new Card(item, '#template-cards');
  const newCard = card.generateCard();

  addCard(newCard);
}

mapNewCard.forEach((item) => {
  createCard(item);
})

// Валидация
const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}); 

const profileValidation = new FormValidator(enableValidation, popupProfileForm);
const cardValidation = new FormValidator(enableValidation, popupCardForm);

profileValidation.activateValidation();
cardValidation.activateValidation();
