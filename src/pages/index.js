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



