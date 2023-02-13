import './index.css';
import Card from "../components/Card.js";
import { initialCards, profileEditButton, popupInputName, popupInputDescriprion, cardAddButton, cardContainer, enableValidation } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js'
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// Профиль
  
const userInfo = new UserInfo ({
  nameProfile: '.profile__name',
  infoProfile: '.profile__description'
});


profileEditButton.addEventListener('click', ()=>{
  popupProfile.open();
  const {nameProfile, infoProfile} = userInfo.getUserInfo();
  popupInputName.value = nameProfile;
  popupInputDescriprion.value = infoProfile;
  profileValidation.resetValidation();
}
)

function modifyProfile(obj){
  userInfo.setUserInfo(obj.nameInput, obj.descriptionInput);

  popupProfile.close();
}

const popupProfile = new PopupWithForm(".popup_profile", modifyProfile)
popupProfile.setEventListeners();

//Попап карточки  
const addCardPopup = new PopupWithForm(".popup_card", createCard);
addCardPopup.setEventListeners();

function openCardPopup(){
  addCardPopup.open();
  cardValidation.resetValidation();
}

cardAddButton.addEventListener('click', ()=> openCardPopup());

// //Попап изображения
const popupWithImage = new PopupWithImage(".popup_image")
popupWithImage.setEventListeners();

function openPopupImage(name,link){
  popupWithImage.open({name, link})
};

// 
// //Создание карточек
const getCard = (element) => {
  const card = new Card(element, "#template-cards", openPopupImage);
  const cardElement = card.generateCard();
  return cardElement;
}

function createCard(element) {
  const newCard = getCard(element);
  renderCard.addItem(newCard);
}

const renderCard = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = {
      name: element.name,
      link: element.link,
    }
    const newCard = getCard(card);
    renderCard.addItem(newCard)
  },
}, cardContainer);

renderCard.renderItems()


const profileForm = document.querySelector('.popup__profile-form')
const profileValidation = new FormValidator(enableValidation, profileForm);

const cardForm = document.querySelector('.popup__card-form')
const cardValidation = new FormValidator(enableValidation, cardForm);


profileValidation.activateValidation();
cardValidation.activateValidation();



// //Открытие всех попапов
// export function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupEsc);
//   document.addEventListener("mousedown", closePopupOutsideClick);
// }

// //Закрытие всех попапов
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closePopupEsc);
//   document.removeEventListener("mousedown", closePopupOutsideClick);
// }

// //Закрытие попапов на ESC
// function closePopupEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// }

// //Закрытие попапов на оверлей
// function closePopupOutsideClick(evt) {
//   const eventTarget = evt.target;
//   if (eventTarget.classList.contains("popup_opened")) {
//     closePopup(eventTarget);
//   }
// }

// //Закрытие всех попапов на крестик
// closeButtons.forEach((button) => {
//   const popup = button.closest(".popup");
//   button.addEventListener("click", () => closePopup(popup));
// });


// // Кнопка добавления новой карточки, пустые поля, дезактивация сабмита
// cardAddButton.addEventListener("click", function () {
//   popupCardForm.reset();
//   openPopup(popupCard);
//   cardValidation.resetValidation();
// });

// //Сохрание карточки
// function submitCardForm(event) {
//   event.preventDefault();
//   const addValues = {
//     name: cardInputPlace.value,
//     link: cardInputLink.value,
//   };
//   createCard(addValues);
//   closePopup(popupCard, popupCardForm);
// }


//Профиль

// //Кнопка редактировани профиля !
// profileEditButton.addEventListener("click", function () {
//   openPopup(popupEditProfile);
//   popupInputName.value = profileName.textContent;
//   popupInputDescriprion.value = profileDescription.textContent;
//   profileValidation.resetValidation();
// });

// //Сабмит профиля
// function submitEditProfileForm(event) {
//   event.preventDefault();
//   profileName.textContent = popupInputName.value;
//   profileDescription.textContent = popupInputDescriprion.value;
//   closePopup(popupEditProfile);
// }

// popupProfileForm.addEventListener("submit", submitEditProfileForm);
