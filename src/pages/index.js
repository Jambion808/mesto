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
  addAvatarButton,
  profileAvatar,
  popupAvatar,
  cardForm, 
  avatarForm,
  popupProfileEdit,
  profileForm,
  popupDelete,
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


let userId;

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60", 
  headers: {
    authorization: "cc77f94d-b1ef-42c0-9cc3-7185b7071d0e",
    "Content-Type": "application/json",
  },
});



//1) Get запросы на пользователя и карточки 
Promise.all([api.getInfoAboutUser(), api.getCardsUser()])
  .then((responses) => {
  const userData = responses[0];
  const cardList = responses[1];
  userInfo.setUserInfo(userData);
  userInfo.getUserId(userData._id);
  userId = userData._id;
  userInfo.setUserAvatar(userData.avatar)
  renderCard.renderItems(cardList);
})
.catch((err) => {
  console.log(`Ошибка ${err}`);
});

const userInfo = new UserInfo({
  nameProfile: ".profile__name",
  infoProfile: ".profile__description",
  avatarProfile: ".profile__avatar"
});
 

//Работаем с профилем//

//отправляем данные профиля 
const formProfileEditSubmit = new PopupWithForm(popupProfileEdit, (data) => {
  formProfileEditSubmit.renderLoading(true);
  api
    .setInfoAboutUser(data)
    .then((values) => {
      userInfo.setUserInfo(values);
      formProfileEditSubmit.close();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      formProfileEditSubmit.renderLoading(false);
    });
})

//Показать попап профилья
function showPopupProfile() {
  formProfileEditSubmit.open();
  const infoObject = userInfo.getUserInfo();
  popupInputName.value = infoObject.name;
  popupInputDescriprion.value = infoObject.about
  // popupInputName.value = userInfo.getUserInfo().name;
  // popupInputDescriprion.value = userInfo.getUserInfo().about;
  profileValidation.activateValidation();
  profileValidation.resetValidation();
}

profileEditButton.addEventListener("click", showPopupProfile);

// const popupProfile = new PopupWithForm(popupProfileEdit, formProfileEditSubmit);
formProfileEditSubmit.setEventListeners();


//Работаем с карточками//
//отправляем карточку на сервер 
const addCardUser = new PopupWithForm(popupCard, (values) => {
  addCardUser.renderLoading(true);
  api
    .setAddUserCard(values.name, values.link)
    .then((res) => {
      const cardUserElement = getCard(res)
      renderCard.addItem(cardUserElement)
      addCardUser.close()
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      addCardUser.renderLoading(false);
    });
    // addCardPopup.close()
})

// const addCardPopup = new PopupWithForm(popupCard, addCardUser);

//Создание карточек
const renderCard = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      renderCard.addItem(getCard(element))
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
  const card = new Card(element, "#template-cards", openPopupImage, userId, handleCardLike, handleCardDelete); //
  const cardElement = card.generateCard();
  return cardElement;
};

//Попап карточки 

addCardUser.setEventListeners();

function openCardPopup() {
  addCardUser.open();
  cardValidation.resetValidation();
}

cardAddButton.addEventListener("click", () => openCardPopup());


// function createCard(element) {
//   const newCard = getCard(element);
//   renderCard.addItem(newCard);
// }


//Удаляем карточки с сервера//
//удаление карточки
const deleteCardUserPhoto = new DeleteCardPopup(popupDelete, card =>{
  api.deleteCard(card._cardId)//
  .then (()=>{
    card.deteleCard();
    deleteCardUserPhoto.close();
  })
  .catch((err) => {
    console.log(`Ошибка ${err}`);
  })
})

deleteCardUserPhoto.setEventListeners();

function handleCardDelete(card, cardId){
  deleteCardUserPhoto.open(card, cardId)
}

//Отправляем и снимаем лайки//
// Постановка и снятие лайка 
function handleCardLike(card, isLiked, cardId){
  if(isLiked){
    api.deleteLike(cardId)
    .then((res)=>{
      card.showLikeCount(res.likes.length)
      card.solidLikeStatus(res.likes)
      card.switchLike();
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
  } else {
    api.setLikes(cardId)
    .then((res)=>{
      card.showLikeCount(res.likes.length)
      card.solidLikeStatus(res.likes)
      card.switchLike();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
  }
}


//Попап изображения
const popupWithImage = new PopupWithImage(popupImage); 
popupWithImage.setEventListeners();

function openPopupImage(name, link) { 
  popupWithImage.open({name, link});
}

//Работаем с лбновлением аватара//
//Аватар 
const updateAvatarProfile = new PopupWithForm(popupAvatar, (data) => {
  updateAvatarProfile.renderLoading(true);
    api.setUserAvatarProfile(data)
    .then((data)=>{
      userInfo.setUserAvatar(data.avatar);
      updateAvatarProfile.close()
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      updateAvatarProfile.renderLoading(false);
    });
})

updateAvatarProfile.setEventListeners()

addAvatarButton.addEventListener('click',function(){
  updateAvatarProfile.open();
  avatarValidation.resetValidation()
}
)

//Валидация
const profileValidation = new FormValidator(enableValidation, profileForm);
const cardValidation = new FormValidator(enableValidation, cardForm);
const avatarValidation = new FormValidator(enableValidation, avatarForm);

profileValidation.activateValidation();
cardValidation.activateValidation();
avatarValidation.activateValidation()

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


// const config = {
//   baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60", 
//   headers: {
//     authorization: "cc77f94d-b1ef-42c0-9cc3-7185b7071d0e",
//     "Content-Type": "application/json",
//   },
// };


// //1)Загружаем информацию о пользователе 
// api
//   .getInfoAboutUser()
//   .then((res) => {
//     profileName.textContent = res.name;
//     profileDescription.textContent = res.about;

//   })
//   .catch((err) => {
//     console.log(`Ошибка ${err}`);
//   });

// //2)Загружаем массив карточек с сервера 
// api.getCardsUser().then((res) => {
//   renderCard.renderItems(res);
// });
