export class Card {
  constructor(data, templateSelector, openImagePopup) {
    this._link = data.link;
    this._name = data.name;
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
    this._openImagePopup(this._name, this._link)
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
  _setEventListener() {

    this._cardImage.addEventListener("click", () => {
        this._openImageButton();
      });

    this._likeButton.addEventListener("click", () => {
      this._switchLike();
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
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListener();

    return this._element;
  }
}
