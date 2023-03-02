import Card from "../components/Card.js";
import {
  initialCards,
  popupEditProfile,
  profileName,
  profileDescription,
  profileEditButton,
  popupInputName,
  popupImage,
  popupInputDescriprion,
  cardAddButton,
  cardContainer,
  profileAvatar,
  popupProfileEdit,
  profileForm,
  popupCard,
  enableValidation,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import DeleteCardPopup from "../components/DeleteCardPopup.js";
import "../pages/index.css";

const userInfo = new UserInfo({
  nameProfile: ".profile__name",
  infoProfile: ".profile__description",
});

const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "cc77f94d-b1ef-42c0-9cc3-7185b7071d0e",
    "Content-Type": "application/json",
  },
};

const api = new Api(config);
// 1 ОК
// 2 ОК
// 3 ОК
// 4 ОК
// 5 ОК
// 6 Попап удаления карточки
// 7 Удаление карточки
// 8  Постановка и снятие лайка
// 9 Обновление аватара пользователя
// 10 ОК
 
//1,2) Get запросы на пользователя и карточки !оставляем!
Promise.all([api.getInfoAboutUser(), api.getCardsUser()])
  .then((responses) => {
  const userData = responses[0];
  const cardList = responses[1];
  userInfo.getUserInfo(userData);
  renderCard.renderItems(cardList);
});

// //1)Загружаем информацию о пользователе ОК !оставляем!
api
  .getInfoAboutUser()
  .then((res) => {
    profileName.textContent = res.name;
    profileDescription.textContent = res.about;
    profileAvatar.style = `background-image: url($(res.avatar));`;
  })
  .catch((err) => {
    console.log(`Ошибка ${err}`);
  });

// // //2)Загружаем массив карточек с сервера ОК !оставляем!
api.getCardsUser().then((res) => {
  renderCard.renderItems(res);
});

//3)редактирование профиля ОК !оставляем!

function formProfileEditSubmit(values) {
  userInfo.setUserInfo(values);
  popupProfileEdit.querySelector(".popup__submit").textContent =
    "Сохранение...";
  api
    .setInfoAboutUser(userInfo.getUserInfo().name, userInfo.getUserInfo().about)
    .then(() => {
      popupProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      popupProfileEdit.querySelector(".popup__submit").textContent =
        "Сохранить";
    });
}

//3.1)Показать попап профилья ОК !оставляем!
function showPopupProfile() {
  popupProfile.open();
  popupInputName.value = userInfo.getUserInfo().name;
  popupInputDescriprion.value = userInfo.getUserInfo().about;
  profileValidation.activateValidation();
  profileValidation.resetValidation();
}

profileEditButton.addEventListener("click", showPopupProfile);

const popupProfile = new PopupWithForm(popupProfileEdit, formProfileEditSubmit);
popupProfile.setEventListeners();


// //4)Создание карточек ОК !оставляем!

const renderCard = new Section(
  {
    items: initialCards,
    renderer: (name, link) => {
      renderCard.addItem(getCard(name, link))
      // const card = {
      //   name: element.name,
      //   link: element.link,
      // };
      // const newCard = getCard(card);
      // renderCard.addItem(newCard);
    },
  },cardContainer
);
// renderCard.renderItems()

function getCard(element) { //
  const card = new Card(element, "#template-cards", openPopupImage); //
  const cardElement = card.generateCard();
  return cardElement;
};

// function createCard(element) {
//   const newCard = getCard(element);
//   renderCard.addItem(newCard);
// }




//Попап карточки ОК !оставляем!
const addCardPopup = new PopupWithForm(popupCard, addCardUser);
addCardPopup.setEventListeners();

function openCardPopup() {
  addCardPopup.open();
  cardValidation.resetValidation();
}

cardAddButton.addEventListener("click", () => openCardPopup());

// 4.1 отправляем карточку на сервер ОК !оставляем!
function addCardUser(values) {
  popupCard.querySelector(".popup__submit").textContent =
    "Сохранение...";
  api
    .setAddUserCard(values.name, values.link)
    .then((res) => {
      const cardUserElement = getCard(res)
      renderCard.addItem(cardUserElement)
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      popupCard.querySelector(".popup__submit").textContent =
        "Создать";
    });
    addCardPopup.close()
}

// //4.2)Попап изображения ОК !оставляем!
const popupWithImage = new PopupWithImage(popupImage); 
popupWithImage.setEventListeners();

function openPopupImage(name, link) { 
  popupWithImage.open({name, link});
}


//Валидация ОК !оставляем!
const profileValidation = new FormValidator(enableValidation, profileForm);

const cardForm = document.querySelector(".popup__card-form");
const cardValidation = new FormValidator(enableValidation, cardForm);

profileValidation.activateValidation();
cardValidation.activateValidation();

//Профиль 2

//Профиль 1
// profileEditButton.addEventListener('click', ()=>{
//   popupProfile.open();
//   const {nameProfile, infoProfile} = userInfo.getUserInfo();
//   popupInputName.value = nameProfile;
//   popupInputDescriprion.value = infoProfile;
//   profileValidation.resetValidation();
// }
// )

// function modifyProfile(obj){
//   userInfo.setUserInfo(obj.nameInput, obj.descriptionInput);

//   popupProfile.close();
// }

// const popupProfile = new PopupWithForm(".popup_profile", modifyProfile)
// popupProfile.setEventListeners();


