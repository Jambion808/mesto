import { openPopup } from "./index.js";

export class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
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
    const popupImage = document.querySelector(".popup_image");
    openPopup(popupImage);
    (document.querySelector(".popup__image-photo").src = this._link),
      (document.querySelector(".popup__image-photo").alt = this._name),
      (document.querySelector(".popup__image-description").textContent =
        this._name);
  }

  //ставим и убираем лайк
  _switchLike() {
    this._element
      .querySelector(".card__like")
      .classList.toggle("card__like_active");
  }

  //Удаляем карточку
  _deteleCard() {
    this._element.remove();
  }

  //Ставим слушатель на методы
  _setEventListener() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._openImageButton();
      });

    this._element.querySelector(".card__like").addEventListener("click", () => {
      this._switchLike();
    });

    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._deteleCard();
      });
  }

  //Карточка готова к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }
}
