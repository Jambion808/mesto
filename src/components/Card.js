export default class Card {
  constructor(element, templateSelector, openImagePopup, userId, handleCardLike, handleCardDeleet) {
    this._link = element.link;
    this._name = element.name;
    this._cardId = element._id;
    this._ownerId = element.owner._id;
    this._likes = element.likes;
    this._userId = userId;
    this._openImagePopup = openImagePopup;
    this._templateSelector = templateSelector;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDeleet;
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
   switchLike() {
    this._likeButton.classList.toggle("card__like_active");
  }

  _isLiked(){//
    return this._likes.find(user => {return user._id === this._userId})
  }

  _showStatusLike(){
    if(this._isLiked()){
      this._likeButton.classList.add("card__like_active")
    }
  }

  showLikeCount(count){
    this._likeCount.textContent = count;
  }

  solidLikeStatus(likes){
    this._likes = likes;
  }

  //Удаляем карточку
  deteleCard() { 
    this._element.remove();
  }

  //Ставим слушатель на методы
  _setEventListeners() {


    this._likeButton.addEventListener("click", () => {
      this._handleCardLike(this, this._isLiked(), this._cardId);
   
    });


    this._cardImage.addEventListener("click", () => {
        this._openImageButton();
      });


    this._deleteCardButton.addEventListener("click", () => {
        this._handleCardDelete(this, this._cardId);
      });
  }

  //Карточка готова к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__title").textContent = this._name;
    
    this._likeButton = this._element.querySelector(".card__like");
    this._deleteCardButton = this._element.querySelector(".card__delete");
    this._cardImage = this._element.querySelector(".card__image");
    this._likeCount = this._element.querySelector(".card__like-number") //
    
    
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this.showLikeCount(this._likes.length);
    this._showStatusLike();

    if(this._userId !== this._ownerId){
      this._deleteCardButton.remove();
    }
    

    this._setEventListeners();

    return this._element;
    
  }
  
}
