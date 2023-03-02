export default class Card {
  constructor(element, templateSelector, openImagePopup, userId, clickLike) {
    this._link = element.link;
    this._name = element.name;
    this._likes = element.likes;
    this._cardId = element._id;
    this._ownerId = element.owner._id;
    this._userId = userId;
    this._clickLike = clickLike;

    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  //Попап изображения
  _openImageButton() {
    this._openImagePopup(this._name, this._link);
  }

  //ставим и убираем лайк
  _switchLike() {
    this._likeButton.classList.toggle("card__like_active");
  }

  //Удаляем карточку
  _deteleCard() {
    this._element.remove();
  }

  //Ставим слушатель на методы
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._switchLike();
    });


    this._cardImage.addEventListener("click", () => {
      this._openImageButton();
    });

    this._deleteCardButton.addEventListener("click", () => {
      this._deteleCard();
    });
  }

  //Карточка готова к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__title").textContent = this._name;

    this._likeButton = this._element.querySelector(".card__like");
    this._deleteCardButton = this._element.querySelector(".card__delete");
    this._cardImage = this._element.querySelector(".card__image");
    this._likeCounter = this._element.querySelector(".card__like-number"); //

    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._likeCounter.textContent = this._likes.length;

    this._setEventListeners();

    return this._element;
  }

  _setLikeCounter(res) {
    this._likeCounter.textContent = res._likes.length;
  }

  addLike(res) {
    this._setLikeCounter(res);
    this._likeButton.classList.add("card__like_active");
  }
  
  deleteLike(res){
    this._setLikeCounter(res);
    this._likeButton.classList.remove("card__like_active");
  }
 
}
