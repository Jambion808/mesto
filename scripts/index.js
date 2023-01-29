import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./constants.js";

const popupEditProfile = document.querySelector(".popup_profile");
const profileEditButton = document.querySelector(".profile__edit");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputDescriprion = document.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const cardAddButton = document.querySelector(".profile__add-content");
const popupCard = document.querySelector(".popup_card");
const cardInputPlace = document.querySelector(".popup__input_type_place");
const cardInputLink = document.querySelector(".popup__input_type_url");
const popupProfileForm = document.forms["formPopup"];
const popupCardForm = document.forms["formPopup-card"];
const cardContainer = document.querySelector(".element");
const cardSubmitButton = document.querySelector(".popup__submit_type_card");
const popupImage = document.querySelector(".popup_image");
const closeButtons = document.querySelectorAll(".popup__close");
const popupImagePhoto = document.querySelector(".popup__image-photo");
const popupImageDescription = document.querySelector(
  ".popup__image-description"
);

// //Создание карточек
function getCard(item) {
  const card = new Card(item, "#template-cards", openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

function createCard(item) {
  const newCard = getCard(item);
  addCard(newCard);
}

const addCard = (newCard) => {
  cardContainer.prepend(newCard);
};

initialCards.forEach(createCard);
//

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

//Закрытие всех попапов на крестик
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

//Кнопка редактировани профиля !
profileEditButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
  popupInputName.value = profileName.textContent;
  popupInputDescriprion.value = profileDescription.textContent;
  profileValidation.resetValidation();
});

//Сабмит профиля
function submitEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescriprion.value;
  closePopup(popupEditProfile);
}

popupProfileForm.addEventListener("submit", submitEditProfileForm);

//Попап изображения
function openImagePopup(name, link) {
  popupImageDescription.textContent = name;
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  openPopup(popupImage);
}

// Кнопка добавления новой карточки, пустые поля, дезактивация сабмита
cardAddButton.addEventListener("click", function () {
  popupCardForm.reset();
  openPopup(popupCard);
  cardValidation.resetValidation();
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

// Валидация
const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

const profileValidation = new FormValidator(enableValidation, popupProfileForm);
const cardValidation = new FormValidator(enableValidation, popupCardForm);

profileValidation.activateValidation();
cardValidation.activateValidation();
