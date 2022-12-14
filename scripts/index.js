//Попап профиля (открытие и закрытие)

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupName = document.querySelector('.popup__input_type_name');
let popupDescriprion = document.querySelector('.popup__input_type_description');
let popupClose = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form');
let popupProfile = document.querySelector('.popup_profile');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

profileEditButton.addEventListener('click', function() {
  openPopup(popupProfile)
  popupName.value = profileName.textContent;
  popupDescriprion.value = profileDescription.textContent;
})

function closePopup(popup){
  popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', function(){
  closePopup(popupProfile);
})

function saveSubmit(event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescriprion.value;
  closePopup(popupProfile);
}

popupForm.addEventListener('submit', saveSubmit);

// Попап добавления карточки

const popupCard = document.querySelector ('.popup_card');
const popupCardClose = document.querySelector('.popup__close-card');
const addCardButton = document.querySelector('.profile__add-content');

addCardButton.addEventListener('click', function(){
  openPopup(popupCard);
});

popupCardClose.addEventListener('click', function() {
  closePopup(popupCard);
})

const inputCardPlace = document.querySelector('.popup__input_type_place');
const inputCardLink = document.querySelector('.popup__input_type_url');


function saveCardSubmit(event){
    event.preventDefault();
        const addValues = {
            name: inputCardPlace.value,
            link: inputCardLink.value
        }
        const cardItem = cardCreate(addValues);
        cardContainer.prepend(cardItem);
    closePopup(popupCard);
}

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


//Создание карточки, лайков и удаления

const cardContainer = document.querySelector('.element');
const addCardForm = document.querySelector('.popup__card-form');
const templateCard = document.querySelector('#template-cards');
const popupImage = document.querySelector('.popup_image')
const popupImageButton= document.querySelector('.popup__image-photo');
const popupImageClose = document.querySelector('.popup__image-close');
const popupImageDescr = document.querySelector('.popup__image-description');

const cardCreate = (cardElement) => {
    const card = templateCard.content.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = cardElement.link;
    card.querySelector('.card__image').alt = cardElement.name;
    card.querySelector('.card__title').textContent = cardElement.name;

    inputCardPlace.value = '';
    inputCardLink.value = '';

    const cardLikeButton = card.querySelector('.card__like');
    cardLikeButton.addEventListener('click', function(event){
      cardLike(event);
    });

    const cardDeleteButton = card.querySelector('.card__delete');
    cardDeleteButton.addEventListener('click', function(event){
      cardDelete(event);
    });

    const cardImageButton = card.querySelector('.card__image');
    cardImageButton.addEventListener('click', function(event){
      popupImageButton.src = cardElement.link;
      popupImageDescr.textContent = cardElement.name;
      openPopup(popupImage);
    });

    popupImageClose.addEventListener('click', function() {
      closePopup(popupImage);
    });
    
    return card;
};


initialCards.forEach((object) => {
const newCard = cardCreate(object);
cardContainer.prepend(newCard);
});


addCardForm.addEventListener('submit', saveCardSubmit);


function cardLike(event){
  event.target.classList.toggle('card__like_active');
}

function cardDelete(event){
  event.target.closest('.card').remove();
}
