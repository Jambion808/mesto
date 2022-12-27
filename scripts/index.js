//Попап профиля (открытие и закрытие)

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputDescriprion = document.querySelector('.popup__input_type_description');
const buttonCloseEditProfilePopup = document.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popup_profile');
const popupProfileForm = document.querySelector('.popup__profile-form')

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupOutsideClick);
}

profileEditButton.addEventListener('click', function () {
  openPopup(popupEditProfile)
  popupInputName.value = profileName.textContent;
  popupInputDescriprion.value = profileDescription.textContent;
})

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupOutsideClick);
}

buttonCloseEditProfilePopup.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

function closePopupOutsideClick(evt) {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains('popup_opened')) {
    closePopup(eventTarget);
  }
}


function submitEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescriprion.value;
  closePopup(popupEditProfile);
}

popupProfileForm.addEventListener('submit', submitEditProfileForm);

// Попап добавления карточки

const popupCard = document.querySelector('.popup_card');
const popupCardClose = document.querySelector('.popup__close-card');
const cardAddButton = document.querySelector('.profile__add-content');
const cardSubmitButton = document.querySelector('.popup__submit_type_card')

cardAddButton.addEventListener('click', function () {
  cardInputPlace.value = '';
  cardInputLink.value = '';
  openPopup(popupCard);
  cardSubmitButton.classList.add('popup__submit_disabled');
  cardSubmitButton.setAttribute('disabled', 'disabled')
});

popupCardClose.addEventListener('click', function () {
  closePopup(popupCard);
})

const cardInputPlace = document.querySelector('.popup__input_type_place');
const cardInputLink = document.querySelector('.popup__input_type_url');


function submitCardForm(event) {
  event.preventDefault();
  const addValues = {
    name: cardInputPlace.value,
    link: cardInputLink.value
  }
  const cardItem = createCard(addValues);
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
const popupCardForm = document.querySelector('.popup__card-form');
const cardTemplate = document.querySelector('#template-cards');
const popupImage = document.querySelector('.popup_image')
const popupImageButton = document.querySelector('.popup__image-photo');
const popupImageClose = document.querySelector('.popup__image-close');
const popupImageDescr = document.querySelector('.popup__image-description');

const createCard = (cardElement) => {
  const card = cardTemplate.content.querySelector('.card').cloneNode(true);

  const cardImage = card.querySelector('.card__image');
  cardImage.src = cardElement.link;
  cardImage.alt = cardElement.name;
  card.querySelector('.card__title').textContent = cardElement.name;

  const cardLikeButton = card.querySelector('.card__like');
  cardLikeButton.addEventListener('click', function (event) {
    clickLikeCard(event);
  });

  const cardDeleteButton = card.querySelector('.card__delete');
  cardDeleteButton.addEventListener('click', function (event) {
    clickDeleteCard(event);
  });

  const cardImageButton = card.querySelector('.card__image');
  cardImageButton.addEventListener('click', function (event) {
    popupImageButton.src = cardElement.link;
    popupImageButton.alt = cardElement.name
    popupImageDescr.textContent = cardElement.name;
    openPopup(popupImage);
  });

  return card;
};

popupImageClose.addEventListener('click', function () {
  closePopup(popupImage);
});

initialCards.forEach((card) => {
  const cardNew = createCard(card);
  cardContainer.prepend(cardNew);
});


popupCardForm.addEventListener('submit', submitCardForm);


function clickLikeCard(event) {
  event.target.classList.toggle('card__like_active');
}

function clickDeleteCard(event) {
  event.target.closest('.card').remove();
}
